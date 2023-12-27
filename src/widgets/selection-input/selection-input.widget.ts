import { Action } from '../../actions/action';
import { CardService } from '../../card-service';
import { SelectionInputItem } from './selection-input-item';

export type SelectionInputWidgetProps = {
  name?: string;
  label?: string;
  type?: CardService.SelectionInputType;
  items: SelectionInputItem[];
  onChangeAction?: Action;
};

export class SelectionInputWidget {
  public readonly name?: string;
  public readonly label?: string;
  public readonly type: CardService.SelectionInputType;
  public readonly items: SelectionInputItem[];
  public readonly onChangeAction?: Action;

  public constructor(props: SelectionInputWidgetProps) {
    this.name = props.name;
    this.type = props.type || CardService.SelectionInputType.SWITCH;
    this.items = props.items;
    if (props.label) this.label = props.label;
    if (props.onChangeAction) this.onChangeAction = props.onChangeAction;
  }
}
