import { Widget } from '../widgets';
import { ButtonListWidget } from '../widgets/button/button-list.widget';
import { ImageButtonWidget } from '../widgets/button/image-button/image-button.widget';
import { TextButtonWidget } from '../widgets/button/text-button/text-button.widget';
import { DateTimePickerWidget } from '../widgets/datetime-picker/datetime-picker.widget';
import { DecoratedTextWidget } from '../widgets/decorated-text/decorated-text.widget';
import { DividerWidget } from '../widgets/divider/divider.widget';
import { SelectionInputWidget } from '../widgets/selection-input/selection-input.widget';
import { TextParagraphWidget } from '../widgets/text-paragraph/text-paragraph.widget';

export type CardSectionProps = {
  header?: string;
  collapsible?: boolean;
  numUncollapsibleWidgets?: number;
  widgets: Widget[];
};

const widgetNameMap = new Map([
  [SelectionInputWidget.name, 'selectionInput'],
  [TextParagraphWidget.name, 'textParagraph'],
  [DecoratedTextWidget.name, 'decoratedText'],
  [ButtonListWidget.name, 'buttonList'],
  [DateTimePickerWidget.name, 'dateTimePicker'],
  [DividerWidget.name, 'divider'],
]);

export class CardSection {
  public readonly header?: string;
  public readonly collapsible?: boolean;
  public readonly numUncollapsibleWidgets?: number;
  public readonly widgets: { [key: string]: Widget }[] = [];

  public constructor(props: CardSectionProps) {
    if (props.header) this.header = props.header;
    if (props.collapsible) this.collapsible = props.collapsible;
    if (props.numUncollapsibleWidgets)
      this.numUncollapsibleWidgets = props.numUncollapsibleWidgets;

    for (const widget of props.widgets) {
      if (
        widget.constructor.name === TextButtonWidget.name ||
        widget.constructor.name === ImageButtonWidget.name
      ) {
        throw new Error(
          'Button widgets should be wrapped in a ButtonListWidget',
        );
      }

      const widgetName = widgetNameMap.get(widget.constructor.name);
      if (!widgetName) {
        console.error(widget.constructor.name);
        throw new Error('unknown widget name');
      }
      const mapped = {
        [widgetName]: widget,
      };
      this.widgets.push(mapped);
    }
  }
}
