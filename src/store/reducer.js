/**
 * Reducer 数据处理
 */
import { combineReducers } from 'redux'
import ActionType from './action.js'

const sliderToggle = (state = {}, { type, collapsed }) => {
  switch (type) {
    case ActionType.SLIDERTOGGLE:
      return {
        ...state,
        collapsed,
      }
    default:
      return state
  }
}

const login = (state = {}, { type, user }) => {
  switch (type) {
    case ActionType.LOGIN:
      return { ...state, user }
    default:
      return state
  }
}

const todo = (state = {}, { type, todo }) => {
  switch (type) {
    case ActionType.TODO:
      return {
        ...state,
        todo,
      }
    default:
      return state
  }
}

export default combineReducers({
  todo,
  login,
  sliderToggle,
})
