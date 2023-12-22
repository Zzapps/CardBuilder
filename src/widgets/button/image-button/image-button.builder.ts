import { Action } from "../../../actions/action";
import { OpenLinkAction } from "../../../actions/open-link-action";
import { CardBuilder } from "../../../card.builder";
import { IconBuilder } from "../../../shared/icon.builder";
import {
  ImageButtonWidget,
  ImageButtonWidgetProps,
} from "./image-button.widget";

export class ImageButtonBuilder {
  private _iconBuilder: IconBuilder;
  private _props: ImageButtonWidgetProps = {};

  public constructor() {
    this._iconBuilder = new IconBuilder();
  }

  public build(): ImageButtonWidget {
    const icon = this._iconBuilder.build();
    this._props.icon = icon;
    return new ImageButtonWidget(this._props);
  }

  public setIcon(icon: CardBuilder.KnownIcon): this {
    this._iconBuilder.setKnownIcon(icon);
    return this;
  }

  public setIconUrl(url: string): this {
    this._iconBuilder.setIconUrl(url);
    return this;
  }

  public setAltText(value: string): this {
    this._iconBuilder.setAltText(value);
    return this;
  }

  public setDisabled(value: boolean = true): this {
    this._props.disabled = value;
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
