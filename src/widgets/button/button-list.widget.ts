import { ButtonWidget } from './';

export type ButtonListWidgetProps = {
  buttons: ButtonWidget[];
};

export class ButtonListWidget {
  public readonly buttons: ButtonWidget[];

  public constructor(props: ButtonListWidgetProps) {
    this.buttons = props.buttons;
  }
}
