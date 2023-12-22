import { ButtonBuilder } from "../widgets/button";
import { Footer, FooterProps } from "./footer";

type FooterBuilderProps = {
  primaryButtonBuilder?: ButtonBuilder;
  secondaryButtonBuilder?: ButtonBuilder;
};

export class FooterBuilder {
  private _props: FooterBuilderProps = {};

  public build(): Footer {
    if (!this._props.primaryButtonBuilder)
      throw new Error("Footer requires a primary button");

    const hasSecondary = !!this._props.secondaryButtonBuilder;

    const props: FooterProps = {
      primaryButton: this._props.primaryButtonBuilder.build(),
      ...(hasSecondary && {
        secondaryButton: this._props.secondaryButtonBuilder!.build(),
      }),
    };

    return new Footer(props);
  }

  public setPrimaryButton(button: ButtonBuilder): this {
    this._props.primaryButtonBuilder = button;
    return this;
  }

  public setSecondaryButton(button: ButtonBuilder): this {
    this._props.secondaryButtonBuilder = button;
    return this;
  }
}
