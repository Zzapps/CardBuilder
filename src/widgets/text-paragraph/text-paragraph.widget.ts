export type TextParagraphWidgetProps = {
  text: string;
};

export class TextParagraphWidget {
  public readonly text: string;

  public constructor(props: TextParagraphWidgetProps) {
    this.text = props.text;
  }
}
