import { CardService } from '../card-service';
import { Icon, IconProps } from './icon';

export class IconBuilder {
  private _props: IconProps = {
    imageType: CardService.ImageType.SQUARE,
  };

  public build(): Icon {
    return new Icon(this._props);
  }

  public setKnownIcon(icon: CardService.KnownIcon): this {
    this._props.iconUrl = undefined;
    this._props.knownIcon = icon;
    return this;
  }

  public setIconUrl(url: string): this {
    this._props.knownIcon = undefined;
    this._props.iconUrl = url;
    return this;
  }

  public setImageType(type: CardService.ImageType): this {
    this._props.imageType = type;
    return this;
  }

  public setAltText(value: string): this {
    this._props.altText = value;
    return this;
  }
}
