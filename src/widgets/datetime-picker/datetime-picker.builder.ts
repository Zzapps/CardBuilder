import { Action } from '../../actions/action';
import { CardService } from '../../card-service';
import {
  DateTimePickerWidget,
  DateTimePickerWidgetProps,
} from './datetime-picker.widget';

export class DateTimePickerBuilder {
  private _props: DateTimePickerWidgetProps = {};

  public build(): DateTimePickerWidget {
    return new DateTimePickerWidget(this._props);
  }

  public setName(name: string): this {
    this._props.name = name;
    return this;
  }

  public setType(type: CardService.DateTimePickerType): this {
    this._props.type = type;
    return this;
  }

  // NOTE: Compat
  public setFieldName = this.setName;

  public setLabel(label: string): this {
    this._props.label = label;
    return this;
  }

  // NOTE: Compat
  public setTitle = this.setLabel;

  public setValueInMsSinceEpoch(value: number): this {
    this._props.valueMsEpoch = value;
    return this;
  }

  public setTimezoneOffsetInMins(value: number): this {
    this._props.timezoneOffset = value;
    return this;
  }

  public setOnChangeAction(action: Action): this {
    this._props.onChangeAction = action;
    return this;
  }
}
