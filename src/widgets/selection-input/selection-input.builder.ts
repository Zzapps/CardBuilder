import { Action } from '../../actions/action';
import { CardBuilder } from '../../card.builder';
import { SelectionInputItem } from './selection-input-item';
import {
  SelectionInputWidget,
  SelectionInputWidgetProps,
} from './selection-input.widget';

export class SelectionInputBuilder {
  private _props: SelectionInputWidgetProps = {
    name: '',
    type: CardBuilder.SelectionInputType.SWITCH,
    items: [],
  };

  public build(): SelectionInputWidget {
    return new SelectionInputWidget(this._props);
  }

  public setName(name: string): this {
    this._props.name = name;
    return this;
  }

  public setType(type: CardBuilder.SelectionInputType): this {
    this._props.type = type;
    return this;
  }

  public setLabel(label: string): this {
    this._props.label = label;
    return this;
  }

  // NOTE: For Apps Script code compat
  public setTitle(title: string): this {
    return this.setLabel(title);
  }

  public addItem(text: string, value: string, selected?: boolean): this {
    const item = new SelectionInputItem({ text, value, selected });
    this._props.items.push(item);
    return this;
  }

  public setOnChangeAction(action: Action): this {
    this._props.onChangeAction = action;
    return this;
  }
}
