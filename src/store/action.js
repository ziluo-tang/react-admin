/**
 * action 类型
 */
export const type = {
    SAYHELLO: 'SAYHELLO',
    TODO: 'TODO'
}

/**
 * action
 * @param {*} text 
 */
export function sayHello(text) {
    return {
        type: type.SAYHELLO,
        text
    }
}

export function todo(doSomething) {
    return {
        type: type.TODO,
        doSomething
    }
}