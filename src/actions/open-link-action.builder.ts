import {
  OpenLinkAction,
  OpenLinkActionProps,
  OpenLinkOnClose,
  OpenLinkOpenAs,
} from './open-link-action';

export class OpenLinkActionBuilder {
  private _props: OpenLinkActionProps = {
    url: '',
  };

  public build(): OpenLinkAction {
    return new OpenLinkAction(this._props);
  }

  public setUrl(url: string): this {
    this._props.url = url;
    return this;
  }

  public setOpenAs(openAs: OpenLinkOpenAs): this {
    this._props.openAs = openAs;
    return this;
  }

  public setOnClose(onClose: OpenLinkOnClose): this {
    this._props.onClose = onClose;
    return this;
  }
}
