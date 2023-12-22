import { ButtonListBuilder } from './button/button-list.builder';
import { ButtonListWidget } from './button/button-list.widget';
import { DateTimePickerBuilder } from './datetime-picker/datetime-picker.builder';
import { DateTimePickerWidget } from './datetime-picker/datetime-picker.widget';
import { DividerBuilder } from './divider/divider.builder';
import { DividerWidget } from './divider/divider.widget';
import { SelectionInputBuilder } from './selection-input/selection-input.builder';
import { SelectionInputWidget } from './selection-input/selection-input.widget';
import { TextParagraphBuilder } from './text-paragraph/text-paragraph.builder';
import { TextParagraphWidget } from './text-paragraph/text-paragraph.widget';

export type Widget =
  | SelectionInputWidget
  | TextParagraphWidget
  | ButtonListWidget
  | DateTimePickerWidget
  | DividerWidget;

export type WidgetBuilder =
  | SelectionInputBuilder
  | TextParagraphBuilder
  | ButtonListBuilder
  | DateTimePickerBuilder
  | DividerBuilder;
