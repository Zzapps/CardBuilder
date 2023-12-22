import { Widget } from '../widgets';
import { CardSection, CardSectionProps } from './card-section';

export class CardSectionBuilder {
  private _props: CardSectionProps = {
    widgets: [],
  };

  public build(): CardSection {
    return new CardSection(this._props);
  }

  public setHeader(value: string): this {
    this._props.header = value;
    return this;
  }

  public setCollapsible(value: boolean): this {
    this._props.collapsible = value;
    return this;
  }

  public setNumUncollapsibleWidgets(value: number): this {
    this._props.numUncollapsibleWidgets = value;
    return this;
  }

  public addWidget(widget: Widget): this {
    this._props.widgets.push(widget);
    return this;
  }

  public addWidgets(widgets: Widget[]): this {
    this._props.widgets.push(...widgets);
    return this;
  }
}
