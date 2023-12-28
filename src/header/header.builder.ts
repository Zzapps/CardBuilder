import { CardService } from '..';
import { Header, HeaderProps } from './header';

export class HeaderBuilder {
  private _props: HeaderProps = {};

  public build(): Header {
    return new Header(this._props);
  }

  public setTitle(title: string): this {
    this._props.title = title;
    return this;
  }

  public setSubtitle(subtitle: string): this {
    this._props.subtitle = subtitle;
    return this;
  }

  public setImageUrl(imageUrl: string): this {
    this._props.imageUrl = imageUrl;
    return this;
  }

  public setImageType(type: CardService.ImageType): this {
    this._props.imageType = type;
    return this;
  }
}
