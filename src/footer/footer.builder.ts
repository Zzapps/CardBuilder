import { ButtonWidget } from '../widgets/button';
import { Footer, FooterProps } from './footer';

export class FooterBuilder {
  private _props: Partial<FooterProps> = {};

  public build(): Footer {
    if (!this._props.primaryButton)
      throw new Error('Footer requires a primary button');
    return new Footer(this._props as FooterProps);
  }

  public setPrimaryButton(button: ButtonWidget): this {
    this._props.primaryButton = button;
    return this;
  }

  public setSecondaryButton(button: ButtonWidget): this {
    this._props.secondaryButton = button;
    return this;
  }
}
