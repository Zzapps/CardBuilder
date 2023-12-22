import { Action } from '../../../actions/action';
import { getActionName } from '../../../actions/action-name-map';
import { OpenLinkAction } from '../../../actions/open-link-action';
import { Color } from '../../../shared/color';

export type TextButtonWidgetProps = {
  text: string;
  altText?: string;
  disabled?: boolean;
  color?: Color;
  onClick?: Action | OpenLinkAction;
};

export class TextButtonWidget {
  public readonly text: string;
  public readonly altText?: string;
  public readonly disabled?: boolean;
  public readonly color?: Color;
  public readonly onClick?: {
    [key: string]: Action | OpenLinkAction;
  };

  public constructor(props: TextButtonWidgetProps) {
    this.text = props.text;
    if (props.altText) this.altText = props.altText;
    if (props.disabled) this.disabled = props.disabled;
    if (props.color) this.color = props.color;
    if (props.onClick) {
      const actionName = getActionName(props.onClick.constructor.name);
      this.onClick = {
        [actionName]: props.onClick,
      };
    }
  }
}
