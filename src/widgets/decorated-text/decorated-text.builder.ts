import { ButtonWidget } from '../button';
import {
  DecoratedTextWidget,
  DecoratedTextWidgetProps,
} from './decorated-text.widget';

export class DecoratedTextBuilder {
  private _props: DecoratedTextWidgetProps = {
    text: '',
  };

  public build(): DecoratedTextWidget {
    return new DecoratedTextWidget(this._props);
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

  public setButton(button: ButtonWidget) {
    this._props.button = button;
    return this;
  }

  public setWrapText(input: boolean) {
    this._props.wrapText = input;
    return this;
  }
}
