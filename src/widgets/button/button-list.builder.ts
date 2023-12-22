import { ButtonBuilder } from '.';
import { ButtonListWidget, ButtonListWidgetProps } from './button-list.widget';

type ButtonListBuilderProps = {
  buttonBuilders: ButtonBuilder[];
};

export class ButtonListBuilder {
  private _props: ButtonListBuilderProps = {
    buttonBuilders: [],
  };

  public build(): ButtonListWidget {
    const props: ButtonListWidgetProps = {
      buttons: this._props.buttonBuilders.map((x) => x.build()),
    };
    return new ButtonListWidget(props);
  }

  public addButton(...button: ButtonBuilder[]): this {
    this._props.buttonBuilders.push(...button);
    return this;
  }
}
