/**
 * Reducer 数据处理
 */
import { combineReducers } from 'redux';
import { type } from './action.js'
const sayHello = (state = {}, action) => {
    switch (action.type) {
        case type.SAYHELLO:
            return {
                ...state,
                text: action.text
            }
        default: return state;
    }
}

const todo = (state = {}, action) => {
    switch (action.type) {
        case type.SAYHELLO:
            return {
                ...state,
                doSomething: action.doSomething
            };
        default: return state;
    }
}
export default combineReducers({
    sayHello,
    todo
})