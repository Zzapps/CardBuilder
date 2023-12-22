export class Color {
  public constructor(
    public readonly red: number,
    public readonly green: number,
    public readonly blue: number,
    public readonly alpha: number,
  ) {
    this.red = red / 255;
    this.green = green / 255;
    this.blue = blue / 255;
  }
}

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}
