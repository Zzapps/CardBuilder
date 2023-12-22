export enum OpenLinkOpenAs {
  OVERLAY = 'OVERLAY',
}

export enum OpenLinkOnClose {
  RELOAD = 'RELOAD',
}

export type OpenLinkActionProps = {
  url: string;
  openAs?: OpenLinkOpenAs;
  onClose?: OpenLinkOnClose;
};

export class OpenLinkAction {
  public readonly url: string;
  public readonly openAs?: OpenLinkOpenAs;
  public readonly onClose?: OpenLinkOnClose;

  public constructor(props: OpenLinkActionProps) {
    this.url = props.url;
    this.openAs = props.openAs;
    this.onClose = props.onClose;
  }
}
