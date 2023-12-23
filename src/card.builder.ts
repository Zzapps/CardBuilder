import { Card, CardProps } from './Card';
import { CardSectionBuilder } from './card-section/card-section.builder';
import { FooterBuilder } from './footer/footer.builder';

type CardBuilderProps = {
  sectionBuilders: CardSectionBuilder[];
  fixedFooterBuilder?: FooterBuilder;
  name?: string;
};

export class CardBuilder {
  private _props: CardBuilderProps = {
    sectionBuilders: [],
  };

  public build(): Card {
    const cardProps: CardProps = {
      sections: this._props.sectionBuilders.map((x) => x.build()),
      ...(this._props.fixedFooterBuilder && {
        fixedFooter: this._props.fixedFooterBuilder.build(),
      }),
      name: this._props.name,
    };
    return new Card(cardProps);
  }

  public addSection(...sections: CardSectionBuilder[]): this {
    this._props.sectionBuilders.push(...sections);
    return this;
  }

  public setName(value: string): this {
    this._props.name = value;
    return this;
  }

  public setFixedFooter(footer: FooterBuilder): this {
    this._props.fixedFooterBuilder = footer;
    return this;
  }
}
