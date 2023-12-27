import { CardBuilder } from './card.builder';
import { ActionBuilder } from './actions/action.builder';
import { OpenLinkActionBuilder } from './actions/open-link-action.builder';
import { CardSectionBuilder } from './card-section/card-section.builder';
import { FooterBuilder } from './footer/footer.builder';
import { ButtonListBuilder } from './widgets/button/button-list.builder';
import { ImageButtonBuilder } from './widgets/button/image-button/image-button.builder';
import { TextButtonBuilder } from './widgets/button/text-button/text-button.builder';
import { DateTimePickerBuilder } from './widgets/datetime-picker/datetime-picker.builder';
import { DecoratedTextBuilder } from './widgets/decorated-text/decorated-text.builder';
import { DividerBuilder } from './widgets/divider/divider.builder';
import { SelectionInputBuilder } from './widgets/selection-input/selection-input.builder';
import { TextParagraphBuilder } from './widgets/text-paragraph/text-paragraph.builder';
import { Color } from './shared/color';

type CardServiceConfig = {
  primaryColor?: Color;
  secondaryColor?: Color;
};

export class CardService {
  private static _config: CardServiceConfig = {};

  public static setConfig(config: CardServiceConfig): void {
    this._config = config;
  }

  public static getOptions(): CardServiceConfig {
    return this._config;
  }

  public static newCardBuilder(): CardBuilder {
    return new CardBuilder();
  }

  public static newCardSection(): CardSectionBuilder {
    return new CardSectionBuilder();
  }

  public static newSelectionInput(): SelectionInputBuilder {
    return new SelectionInputBuilder();
  }

  public static newTextParagraph(text?: string): TextParagraphBuilder {
    const builder = new TextParagraphBuilder();
    if (text) {
      builder.setText(text);
    }
    return builder;
  }

  public static newDecoratedText(): DecoratedTextBuilder {
    return new DecoratedTextBuilder();
  }

  public static newTextButton(text?: string): TextButtonBuilder {
    const builder = new TextButtonBuilder();

    if (text) {
      builder.setText(text);
    }

    return builder;
  }

  public static newImageButton(): ImageButtonBuilder {
    return new ImageButtonBuilder();
  }

  public static newButtonSet(): ButtonListBuilder {
    return new ButtonListBuilder();
  }

  public static newAction(): ActionBuilder {
    return new ActionBuilder();
  }

  public static newOpenLink(): OpenLinkActionBuilder {
    return new OpenLinkActionBuilder();
  }

  public static newFixedFooter(): FooterBuilder {
    return new FooterBuilder();
  }

  public static newDateTimePicker(): DateTimePickerBuilder {
    return new DateTimePickerBuilder();
  }

  public static newDivider(): DividerBuilder {
    return new DividerBuilder();
  }
}

export namespace CardService {
  export enum SelectionInputType {
    CHECK_BOX = 'CHECK_BOX',
    DROPDOWN = 'DROPDOWN',
    RADIO_BUTTON = 'RADIO_BUTTON',
    SWITCH = 'SWITCH',
  }

  export enum LoadIndicator {
    SPINNER = 'SPINNER',
    NONE = 'NONE',
  }

  export enum DateTimePickerType {
    DATE_AND_TIME = 'DATE_AND_TIME',
    DATE_ONLY = 'DATE_ONLY',
    TIME_ONLY = 'TIME_ONLY',
  }

  export enum KnownIcon {
    AIRPLANE = 'AIRPLANE',
    BOOKMARK = 'BOOKMARK',
    BUS = 'BUS',
    CAR = 'CAR',
    CLOCK = 'CLOCK',
    CONFIRMATION_NUMBER_ICON = 'CONFIRMATION_NUMBER_ICON',
    DOLLAR = 'DOLLAR',
    DESCRIPTION = 'DESCRIPTION',
    EMAIL = 'EMAIL',
    EVENT_PERFORMER = 'EVENT_PERFORMER',
    EVENT_SEAT = 'EVENT_SEAT',
    FLIGHT_ARRIVAL = 'FLIGHT_ARRIVAL',
    FLIGHT_DEPARTURE = 'FLIGHT_DEPARTURE',
    HOTEL = 'HOTEL',
    HOTEL_ROOM_TYPE = 'HOTEL_ROOM_TYPE',
    INVITE = 'INVITE',
    MAP_PIN = 'MAP_PIN',
    MEMBERSHIP = 'MEMBERSHIP',
    MULTIPLE_PEOPLE = 'MULTIPLE_PEOPLE',
    NONE = 'NONE',
    OFFER = 'OFFER',
    PERSON = 'PERSON',
    PHONE = 'PHONE',
    RESTAURANT_ICON = 'RESTAURANT_ICON',
    SHOPPING_CART = 'SHOPPING_CART',
    STAR = 'STAR',
    STORE = 'STORE',
    TICKET = 'TICKET',
    TRAIN = 'TRAIN',
    VIDEO_CAMERA = 'VIDEO_CAMERA',
    VIDEO_PLAY = 'VIDEO_PLAY',
  }

  export enum ImageType {
    SQUARE = 'SQUARE',
    CIRCLE = 'CIRCLE',
  }

  export enum TextButtonStyle {
    TEXT = 'TEXT',
    FILLED = 'FILLED',
  }
}
