import { Action } from './action';
import { OpenLinkAction } from './open-link-action';

export const actionNameMap = new Map([
  [Action.name, 'action'],
  [OpenLinkAction.name, 'openLink'],
]);

export const getActionName = (key: string): string => {
  const actionName = actionNameMap.get(key);
  if (!actionName) throw new Error('Unknown action name');
  return actionName;
};
