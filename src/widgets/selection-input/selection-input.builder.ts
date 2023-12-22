import { ActionBuilder } from "../../actions/action.builder";
import { CardBuilder } from "../../card.builder";
import { SelectionInputItem } from "./selection-input-item";
import {
  SelectionInputWidget,
  SelectionInputWidgetProps,
} from "./selection-input.widget";

type SelectionInputBuilderProps = {
  name?: string;
  label?: string;
  type?: CardBuilder.SelectionInputType;
  items: SelectionInputItem[];
  onChangeActionBuilder?: ActionBuilder;
};

export class SelectionInputBuilder {
  private _props: SelectionInputBuilderProps = {
    type: CardBuilder.SelectionInputType.SWITCH,
    items: [],
  };

  public build(): SelectionInputWidget {
    const hasAction = !!this._props.onChangeActionBuilder;
    const props: SelectionInputWidgetProps = {
      ...this._props,
      ...(hasAction && {
        onChangeAction: this._props.onChangeActionBuilder!.build(),
      }),
    };
    return new SelectionInputWidget(props);
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

  public setOnChangeAction(action: ActionBuilder): this {
    this._props.onChangeActionBuilder = action;
    return this;
  }
}
