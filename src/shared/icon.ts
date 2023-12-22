import { CardBuilder } from '../card.builder';

export type IconProps = {
  knownIcon?: CardBuilder.KnownIcon;
  iconUrl?: string;
  imageType?: CardBuilder.ImageType;
  altText?: string;
};

export class Icon {
  public readonly knownIcon?: CardBuilder.KnownIcon;
  public readonly iconUrl?: string;
  public readonly imageType: CardBuilder.ImageType;
  public readonly altText?: string;

  public constructor(props: IconProps) {
    this.imageType = props.imageType || CardBuilder.ImageType.SQUARE;

    if (props.knownIcon) this.knownIcon = props.knownIcon;
    if (props.iconUrl) this.iconUrl = props.iconUrl;
    if (props.altText) this.altText = props.altText;
  }
}
