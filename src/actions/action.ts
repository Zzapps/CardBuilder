import { CardBuilder } from '../card.builder';

export type ActionProps = {
  function: string;
  parameters: { [key: string]: string };
  loadIndicator?: CardBuilder.LoadIndicator;
};

export class Action {
  public readonly function: string;
  public readonly parameters: { key: string; value: string }[] = [];
  public readonly loadIndicator?: CardBuilder.LoadIndicator;

  public constructor(props: ActionProps) {
    this.function = props.function;
    if (props.loadIndicator) this.loadIndicator = props.loadIndicator;
    for (const [key, value] of Object.entries(props.parameters)) {
      this.parameters.push({ key, value });
    }
  }
}
