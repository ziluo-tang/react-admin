/**
 * action 类型
 */
export const type = {
    SAYHELLO: 'SAYHELLO',
    TODO: 'TODO',
    SLIDERTOGGLE: 'SLIDERTOGGLE'
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

export function sliderToggle(collapsed) {
    return {
        type: type.SLIDERTOGGLE,
        collapsed
    }
}