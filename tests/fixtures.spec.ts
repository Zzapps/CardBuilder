import fs from 'fs';
import path from 'path';

import { TestFixture } from './fixture';

const fixturesDir = path.join(__dirname, './fixtures');
const fixtureFiles = fs
  .readdirSync(fixturesDir)
  .filter((file) => file.endsWith('.ts'));

async function importFixtures(fixtureFiles: string[]): Promise<TestFixture[]> {
  const importedFixtures = await Promise.all(
    fixtureFiles.map((file) => {
      const filePath = path.join(fixturesDir, file);
      return import(filePath)
        .then((module) => {
          if (!module.default || typeof module.default !== 'function') {
            console.error(
              `Module in file ${file} does not have a default export that is a class.`,
            );
            return null;
          }
          return new module.default() as TestFixture;
        })
        .catch((error) => {
          console.error(`Error importing module from file ${file}:`, error);
          return null;
        });
    }),
  );

  return importedFixtures.filter(
    (fixture): fixture is TestFixture => fixture !== null,
  );
}

describe('fixtures', () => {
  let fixtures: TestFixture[] = [];

  beforeAll(async () => {
    fixtures = await importFixtures(fixtureFiles);
  });

  it('Test all fixtures', () => {
    fixtures.forEach((fixture) => {
      const output = fixture.buildCard();
      expect(output).toEqual(fixture.expectedOutput);
    });
  });
});
