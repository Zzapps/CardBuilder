import { DividerBuilder } from './divider.builder';
import { DividerWidget } from './divider.widget';

describe('DividerWidgetBuilder', () => {
  describe('build()', () => {
    it('should create an empty object', () => {
      const output = new DividerBuilder().build();
      expect(output).toBeInstanceOf(DividerWidget);
      expect(output).toEqual({});
    });
  });
});
