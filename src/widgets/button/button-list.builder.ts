import { ButtonWidget } from '.';
import { ButtonListWidget, ButtonListWidgetProps } from './button-list.widget';

export class ButtonListBuilder {
  private _props: ButtonListWidgetProps = {
    buttons: [],
  };

  public build(): ButtonListWidget {
    return new ButtonListWidget(this._props);
  }

  public addButton(button: ButtonWidget): this {
    this._props.buttons.push(button);
    return this;
  }
}
