/**
 * action 类型
 */
const ActionType = {
  TODO: Symbol.for('TODO'),
  SLIDERTOGGLE: Symbol.for('SLIDERTOGGLE'),
  LOGIN: Symbol.for('LOGIN'),
}
export default ActionType

export const Actions = {
  todo: (todo) => ({ type: ActionType.TODO, todo }),
  collapsedToggle: (collapsed) => ({
    type: ActionType.SLIDERTOGGLE,
    collapsed,
  }),
  login: (user) => ({ type: ActionType.LOGIN, user }),
}
