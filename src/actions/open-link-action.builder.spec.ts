import { OpenLinkActionBuilder } from './open-link-action.builder';

describe('OpenLinkActionBuilder', () => {
  let sut: OpenLinkActionBuilder;

  beforeEach(() => {
    sut = new OpenLinkActionBuilder();
  });

  test('sets the URL', () => {
    const url = 'https://zzapps.nl';
    sut.setUrl(url);
    const output = sut.build();
    expect(output.url).toBe(url);
  });
});
