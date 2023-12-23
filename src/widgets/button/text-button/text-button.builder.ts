import { ActionBuilder } from '../../../actions/action.builder';
import { OpenLinkActionBuilder } from '../../../actions/open-link-action.builder';
import { Color } from '../../../shared/color';
import { TextButtonWidget, TextButtonWidgetProps } from './text-button.widget';

type TextButtonBuilderProps = {
  text: string;
  altText?: string;
  disabled?: boolean;
  color?: Color;
  onClickBuilder?: ActionBuilder | OpenLinkActionBuilder;
};

// TODO: Allow directly setting the text by passing a string into the constructor
export class TextButtonBuilder {
  private _props: TextButtonBuilderProps = { text: '' };

  public build(): TextButtonWidget {
    const hasOnClick = !!this._props.onClickBuilder;

    const props: TextButtonWidgetProps = {
      ...this._props,
      ...(hasOnClick && {
        onClick: this._props.onClickBuilder!.build(),
      }),
    };
    return new TextButtonWidget(props);
  }

  public setText(value: string): this {
    this._props.text = value;
    return this;
  }

  public setAltText(value: string): this {
    this._props.altText = value;
    return this;
  }

  public setDisabled(value: boolean): this {
    this._props.disabled = value;
    return this;
  }

  /**
   * Sets the background color of the button
   * @params color Accepts both 6 and 8 digit Hex values
   */
  public setBackgroundColor(color: string): this {
    const instance = Color.fromHex(color);
    this._props.color = instance;
    return this;
  }

  public setOpenLink(action: OpenLinkActionBuilder): this {
    this._props.onClickBuilder = action;
    return this;
  }

  public setOnClickAction(action: ActionBuilder | OpenLinkActionBuilder): this {
    this._props.onClickBuilder = action;
    return this;
  }

  public setTextButtonStyle(value: any): this {
    console.warn(
      'TextButtonStyle does not need to be set. It is automatically inferred',
    );
    return this;
  }
}
