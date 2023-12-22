import { Action } from "../../../actions/action";
import { OpenLinkAction } from "../../../actions/open-link-action";
import { Color } from "../../../shared/color";
import { TextButtonWidget, TextButtonWidgetProps } from "./text-button.widget";

// TODO: Allow directly setting the text by passing a string into the constructor
export class TextButtonBuilder {
  private _props: TextButtonWidgetProps = {
    text: "",
  };

  public build(): TextButtonWidget {
    return new TextButtonWidget(this._props);
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

  // TODO: Switch to Hex
  public setBackgroundColor(
    red: number,
    green: number,
    blue: number,
    alpha: number,
  ): this {
    const color = new Color(red, green, blue, alpha);
    this._props.color = color;
    return this;
  }

  public setOpenLink(action: OpenLinkAction): this {
    this._props.onClick = action;
    return this;
  }

  public setOnClickAction(action: Action | OpenLinkAction): this {
    this._props.onClick = action;
    return this;
  }
}
