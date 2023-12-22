import { ButtonWidget } from '../button';

// TODO: Add other DecoratedTextWidget props such as icons and text alignment
export type DecoratedTextWidgetProps = {
  text: string;
  topLabel?: string;
  bottomLabel?: string;
  button?: ButtonWidget;
  wrapText?: boolean;
  startIcon?: {
    iconUrl: string;
  };
};

export class DecoratedTextWidget {
  public readonly text: string;
  public readonly topLabel?: string;
  public readonly bottomLabel?: string;
  public readonly button?: ButtonWidget;
  public readonly wrapText?: boolean;
  public readonly startIcon?: { iconUrl: string };

  public constructor(props: DecoratedTextWidgetProps) {
    this.text = props.text;
    this.topLabel = props.topLabel;
    this.bottomLabel = props.bottomLabel;
    this.button = props.button;
    this.wrapText = props.wrapText;
    this.startIcon = props.startIcon;
  }
}
