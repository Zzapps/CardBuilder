import { CardSection } from "./card-section/card-section";
import { Footer } from "./footer/footer";

export type CardProps = {
  sections: CardSection[];
  fixedFooter?: Footer;
  name?: string;
};

export class Card {
  public readonly sections: CardSection[];
  public readonly fixedFooter?: Footer;
  public readonly name?: string;

  public constructor(props: CardProps) {
    this.sections = props.sections;
    this.name = props.name;
    this.fixedFooter = props.fixedFooter;
  }
}

// TODO: Give this a more descriptive name
export enum PopCard {
  Card = "card",
  Root = "root",
  Name = "name",
}

export enum CardNavigateAction {
  PushCard = "pushCard",
  UpdateCard = "updateCard",
  PopCard = "popCard",
}

export type NavigationSettings = {
  popCard?: PopCard;
  popCardName?: string;
  navigateAction: CardNavigateAction;
};

export class Navigation {
  public readonly popToRoot?: boolean;
  public readonly pop?: boolean;
  public readonly popToCardName?: string;
  public readonly pushCard?: Card;
  public readonly updateCard?: Card;

  public constructor(
    { popCard, popCardName, navigateAction }: NavigationSettings,
    card?: Card,
  ) {
    switch (popCard) {
      case PopCard.Root:
        this.popToRoot = true;
        break;
      case PopCard.Card:
        this.pop = true;
        break;
      case PopCard.Name:
        if (!popCardName)
          throw new Error(
            "Cannot use `popcard: name` without defining a target card name in `popCardName`",
          );
        this.popToCardName = popCardName;
        break;
    }

    if (navigateAction === "pushCard") {
      if (!card) throw new Error("`card` should be set");
      this.pushCard = card;
    }
    if (navigateAction === "updateCard") {
      if (!card) throw new Error("`card` should be set");
      this.updateCard = card;
    }
  }
}
