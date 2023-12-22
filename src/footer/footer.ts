import { ButtonWidget } from '../widgets/button';

export type FooterProps = {
  primaryButton: ButtonWidget;
  secondaryButton?: ButtonWidget;
};

export class Footer {
  public readonly primaryButton: ButtonWidget;
  public readonly secondaryButton?: ButtonWidget;

  public constructor(props: FooterProps) {
    this.primaryButton = props.primaryButton;
    if (props.secondaryButton) this.secondaryButton = props.secondaryButton;
  }
}
