import { Color } from './color';

describe('Color', () => {
  describe('fromHex()', () => {
    it('should convert 6 digit HEX to RGBA with opacity 1', () => {
      const input = '#D6006D';
      const color = Color.fromHex(input);

      const expected = {
        red: 0.839,
        green: 0,
        blue: 0.427,
        alpha: 1,
      };

      expect(color).toEqual(expected);
    });

    it('should convert 8 digit HEX to RGBA', () => {
      const input = '#D6006D88';
      const color = Color.fromHex(input);

      const expected = {
        red: 0.839,
        green: 0,
        blue: 0.427,
        alpha: 0.533,
      };

      expect(color).toEqual(expected);
    });

    it('should throw if the input does not match 6 or 8 digit HEX notation', () => {
      const input = 'D6006D';
      const act = () => Color.fromHex(input);

      expect(act).toThrow();
    });
  });
});
