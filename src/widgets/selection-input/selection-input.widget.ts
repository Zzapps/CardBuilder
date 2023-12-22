import { Action } from "../../actions/action";
import { CardBuilder } from "../../card.builder";
import { SelectionInputItem } from "./selection-input-item";

export type SelectionInputWidgetProps = {
  name?: string;
  label?: string;
  type?: CardBuilder.SelectionInputType;
  items: SelectionInputItem[];
  onChangeAction?: Action;
};

export class SelectionInputWidget {
  public readonly name?: string;
  public readonly label?: string;
  public readonly type: CardBuilder.SelectionInputType;
  public readonly items: SelectionInputItem[];
  public readonly onChangeAction?: Action;

  public constructor(props: SelectionInputWidgetProps) {
    this.name = props.name;
    this.type = props.type || CardBuilder.SelectionInputType.SWITCH;
    this.items = props.items;
    if (props.label) this.label = props.label;
    if (props.onChangeAction) this.onChangeAction = props.onChangeAction;
  }
}
