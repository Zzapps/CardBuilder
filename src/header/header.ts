import { CardService } from '..';

export type HeaderProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageType?: CardService.ImageType;
};

export class Header {
  public readonly title?: string;
  public readonly subtitle?: string;
  public readonly imageUrl?: string;
  public readonly imageType?: CardService.ImageType;

  public constructor(props: HeaderProps) {
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.imageUrl = props.imageUrl;
    this.imageType = props.imageType;
  }
}
