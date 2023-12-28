import { Card, CardProps } from './Card';
import { CardSectionBuilder } from './card-section/card-section.builder';
import { FooterBuilder } from './footer/footer.builder';
import { HeaderBuilder } from './header/header.builder';

type CardBuilderProps = {
  sectionBuilders: CardSectionBuilder[];
  headerBuilder?: HeaderBuilder;
  fixedFooterBuilder?: FooterBuilder;
  name?: string;
};

export class CardBuilder {
  private _props: CardBuilderProps = {
    sectionBuilders: [],
  };

  public build(): Card {
    const hasHeader = !!this._props.headerBuilder;
    const hasFooter = !!this._props.fixedFooterBuilder;

    const cardProps: CardProps = {
      sections: this._props.sectionBuilders.map((x) => x.build()),
      ...(hasHeader && {
        header: this._props.headerBuilder!.build(),
      }),
      ...(hasFooter && {
        fixedFooter: this._props.fixedFooterBuilder!.build(),
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

  public setHeader(header: HeaderBuilder): this {
    this._props.headerBuilder = header;
    return this;
  }

  public setFixedFooter(footer: FooterBuilder): this {
    this._props.fixedFooterBuilder = footer;
    return this;
  }
}
