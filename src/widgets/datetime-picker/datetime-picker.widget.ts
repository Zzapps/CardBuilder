import { Action } from '../../actions/action';
import { CardBuilder } from '../../card.builder';

export type DateTimePickerWidgetProps = {
  name?: string;
  label?: string;
  type?: CardBuilder.DateTimePickerType;
  valueMsEpoch?: number;
  onChangeAction?: Action;
  timezoneOffset?: number;
};

export class DateTimePickerWidget {
  public readonly name?: string;
  public readonly label?: string;
  public readonly type: CardBuilder.DateTimePickerType;
  public readonly valueMsEpoch?: number;
  public readonly onChangeAction?: Action;
  public readonly timezoneOffsetDate?: number;

  public constructor(props: DateTimePickerWidgetProps) {
    if (props.name) this.name = props.name;
    if (props.label) this.label = props.label;
    this.type = props.type || CardBuilder.DateTimePickerType.DATE_AND_TIME;
    if (props.valueMsEpoch) this.valueMsEpoch = props.valueMsEpoch;
    if (props.onChangeAction) this.onChangeAction = props.onChangeAction;
    if (props.timezoneOffset) this.timezoneOffsetDate = props.timezoneOffset;
  }
}
