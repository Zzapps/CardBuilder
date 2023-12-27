import { Action } from '../../../actions/action';
import { ActionBuilder } from '../../../actions/action.builder';
import { OpenLinkAction } from '../../../actions/open-link-action';
import { OpenLinkActionBuilder } from '../../../actions/open-link-action.builder';
import { CardService } from '../../../card-service';
import { Icon } from '../../../shared/icon';
import { IconBuilder } from '../../../shared/icon.builder';
import {
  ImageButtonWidget,
  ImageButtonWidgetProps,
} from './image-button.widget';

type ImageBUttonBuilderProps = {
  icon?: Icon;
  disabled?: boolean;
  onClickBuilder?: ActionBuilder | OpenLinkActionBuilder;
};

export class ImageButtonBuilder {
  private _iconBuilder: IconBuilder;
  private _props: ImageBUttonBuilderProps = {};

  public constructor() {
    this._iconBuilder = new IconBuilder();
  }

  public build(): ImageButtonWidget {
    const icon = this._iconBuilder.build();
    this._props.icon = icon;

    const hasOnClick = !!this._props.onClickBuilder;

    const props: ImageButtonWidgetProps = {
      ...this._props,
      ...(hasOnClick && {
        onClick: this._props.onClickBuilder!.build(),
      }),
    };
    return new ImageButtonWidget(props);
  }

  public setIcon(icon: CardService.KnownIcon): this {
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

  public setOpenLink(action: OpenLinkActionBuilder): this {
    this._props.onClickBuilder = action;
    return this;
  }

  public setOnClickAction(action: ActionBuilder | OpenLinkActionBuilder): this {
    this._props.onClickBuilder = action;
    return this;
  }
}
