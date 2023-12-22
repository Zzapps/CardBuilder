import { ButtonListWidget } from './button/button-list.widget';
import { DateTimePickerWidget } from './datetime-picker/datetime-picker.widget';
import { DividerWidget } from './divider/divider.widget';
import { SelectionInputWidget } from './selection-input/selection-input.widget';
import { TextParagraphWidget } from './text-paragraph/text-paragraph.widget';

export type Widget =
  | SelectionInputWidget
  | TextParagraphWidget
  | ButtonListWidget
  | DateTimePickerWidget
  | DividerWidget;
