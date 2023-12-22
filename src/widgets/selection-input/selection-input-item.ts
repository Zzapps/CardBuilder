export type SelectionInpuItemProps = {
  text: string;
  value: string;
  selected?: boolean;
};

export class SelectionInputItem {
  public readonly text: string;
  public readonly value: string;
  public readonly selected: boolean;

  public constructor(props: SelectionInpuItemProps) {
    this.text = props.text;
    this.value = props.value;
    this.selected = props.selected || false;
  }
}
