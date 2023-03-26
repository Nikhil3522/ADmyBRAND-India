export const ADD_ARG = 'ADD_ARG'
export const ADD_LOGIC = 'ADD_LOGIC'

export function addArg(argName, ArgValue) {
    return {
        type: ADD_ARG,
        argName,
        ArgValue,
    }
}

export function addLogic(logicName){
    return {
        type: ADD_LOGIC,
        logicName
    }
}