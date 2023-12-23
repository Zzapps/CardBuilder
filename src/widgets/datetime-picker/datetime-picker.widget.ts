import { Action } from '../../actions/action';
import { CardService } from '../../card-service';

export type DateTimePickerWidgetProps = {
  name?: string;
  label?: string;
  type?: CardService.DateTimePickerType;
  valueMsEpoch?: number;
  onChangeAction?: Action;
  timezoneOffset?: number;
};

export class DateTimePickerWidget {
  public readonly name?: string;
  public readonly label?: string;
  public readonly type: CardService.DateTimePickerType;
  public readonly valueMsEpoch?: number;
  public readonly onChangeAction?: Action;
  public readonly timezoneOffsetDate?: number;

  public constructor(props: DateTimePickerWidgetProps) {
    if (props.name) this.name = props.name;
    if (props.label) this.label = props.label;
    this.type = props.type || CardService.DateTimePickerType.DATE_AND_TIME;
    if (props.valueMsEpoch) this.valueMsEpoch = props.valueMsEpoch;
    if (props.onChangeAction) this.onChangeAction = props.onChangeAction;
    if (props.timezoneOffset) this.timezoneOffsetDate = props.timezoneOffset;
  }
}
