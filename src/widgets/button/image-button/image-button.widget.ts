import { Action } from "../../../actions/action";
import { getActionName } from "../../../actions/action-name-map";
import { OpenLinkAction } from "../../../actions/open-link-action";
import { Icon } from "../../../shared/icon";

export type ImageButtonWidgetProps = {
  icon?: Icon;
  disabled?: boolean;
  onClick?: Action | OpenLinkAction;
};

export class ImageButtonWidget {
  public readonly icon?: Icon;
  public readonly disabled?: boolean;
  public readonly onClick?: {
    [key: string]: Action | OpenLinkAction;
  };

  public constructor(props: ImageButtonWidgetProps) {
    this.icon = props.icon;
    if (props.disabled !== undefined) this.disabled = props.disabled;
    if (props.onClick) {
      const actionName = getActionName(props.onClick.constructor.name);
      this.onClick = {
        [actionName]: props.onClick,
      };
    }
  }
}
