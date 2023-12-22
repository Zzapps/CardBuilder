export class Color {
  public constructor(
    public readonly red: number,
    public readonly green: number,
    public readonly blue: number,
    public readonly alpha: number,
  ) {
    this.red = this.roundDecimals(red / 255);
    this.green = this.roundDecimals(green / 255);
    this.blue = this.roundDecimals(blue / 255);
    this.alpha = this.roundDecimals(alpha);
  }

  public static fromHex(hex: string): Color {
    const regex = /^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;

    if (!regex.test(hex)) {
      throw new Error('Invalid hex color code');
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    let a = 1;
    if (hex.length === 9) {
      a = parseInt(hex.slice(7, 9), 16) / 255;
    }

    return new Color(r, g, b, a);
  }

  private roundDecimals(value: number): number {
    const fixed = value.toFixed(3);
    return Number(fixed);
  }
}

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}
