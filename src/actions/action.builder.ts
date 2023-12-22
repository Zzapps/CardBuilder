import { CardBuilder } from '../card.builder';
import { Action, ActionProps } from './action';

export class ActionBuilder {
  private _props: ActionProps = {
    function: '',
    parameters: {},
  };

  public build(): Action {
    return new Action(this._props);
  }

  public setFunction(name: string): this {
    this._props.function = name;
    return this;
  }

  // NOTE: CardService compat
  public setFunctionName(name: string): this {
    return this.setFunction(name);
  }

  public setParameters(params: { [key: string]: string }): this {
    this._props.parameters = params;
    return this;
  }

  public setLoadIndicator(indicator: CardBuilder.LoadIndicator): this {
    this._props.loadIndicator = indicator;
    return this;
  }
}
