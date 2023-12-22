import {
  TextParagraphWidget,
  TextParagraphWidgetProps,
} from './text-paragraph.widget';

export class TextParagraphBuilder {
  private _props: TextParagraphWidgetProps = {
    text: '',
  };

  public build(): TextParagraphWidget {
    return new TextParagraphWidget(this._props);
  }

  public setText(text: string): this {
    this._props.text = text;
    return this;
  }
}
