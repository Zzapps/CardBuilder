import { ButtonBuilder, ButtonWidget } from '../button';
import {
  DecoratedTextWidget,
  DecoratedTextWidgetProps,
} from './decorated-text.widget';

type DecoratedTextBuilderProps = {
  text: string;
  topLabel?: string;
  bottomLabel?: string;
  buttonBuilder?: ButtonBuilder;
  wrapText?: boolean;
  startIcon?: {
    iconUrl: string;
  };
};

export class DecoratedTextBuilder {
  private _props: DecoratedTextBuilderProps = {
    text: '',
  };

  public build(): DecoratedTextWidget {
    const hasButton = !!this._props.buttonBuilder;

    const props: DecoratedTextWidgetProps = {
      ...this._props,
      ...(hasButton && {
        button: this._props.buttonBuilder!.build(),
      }),
    };
    return new DecoratedTextWidget(props);
  }

  public setText(text: string): this {
    this._props.text = text;
    return this;
  }

  public setIconUrl(url: string) {
    this._props.startIcon = { iconUrl: url };
  }

  public setTopLabel(label: string): this {
    this._props.topLabel = label;
    return this;
  }

  public setBottomLabel(label: string): this {
    this._props.bottomLabel = label;
    return this;
  }

  public setButton(button: ButtonBuilder) {
    this._props.buttonBuilder = button;
    return this;
  }

  public setWrapText(input: boolean) {
    this._props.wrapText = input;
    return this;
  }
}
