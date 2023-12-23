import { Card } from '../src';

export abstract class TestFixture {
  abstract buildCard(): Card;
  abstract expectedOutput: Object;
}
