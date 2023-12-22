import { WidgetBuilder } from '../widgets';
import { CardSection, CardSectionProps } from './card-section';

type CardSectionBuilderProps = {
  header?: string;
  collapsible?: boolean;
  numUncollapsibleWidgets?: number;
  widgetBuilders: WidgetBuilder[];
};

export class CardSectionBuilder {
  private _props: CardSectionBuilderProps = {
    widgetBuilders: [],
  };

  public build(): CardSection {
    const props: CardSectionProps = {
      ...this._props,
      widgets: this._props.widgetBuilders.map((x) => x.build()),
    };
    return new CardSection(props);
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

  public addWidget(...widget: WidgetBuilder[]): this {
    this._props.widgetBuilders.push(...widget);
    return this;
  }
}
