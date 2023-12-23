import { CardService } from '../card-service';

export type IconProps = {
  knownIcon?: CardService.KnownIcon;
  iconUrl?: string;
  imageType?: CardService.ImageType;
  altText?: string;
};

export class Icon {
  public readonly knownIcon?: CardService.KnownIcon;
  public readonly iconUrl?: string;
  public readonly imageType: CardService.ImageType;
  public readonly altText?: string;

  public constructor(props: IconProps) {
    this.imageType = props.imageType || CardService.ImageType.SQUARE;

    if (props.knownIcon) this.knownIcon = props.knownIcon;
    if (props.iconUrl) this.iconUrl = props.iconUrl;
    if (props.altText) this.altText = props.altText;
  }
}
