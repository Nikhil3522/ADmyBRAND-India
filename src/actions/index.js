export const ADD_ARG = 'ADD_ARG'
export const ADD_LOGIC = 'ADD_LOGIC'
export const STORE_VALUE = 'STORE_VALUE'

export function addArg(argName, ArgValue) {
    return {
        type: ADD_ARG,
        argName,
        ArgValue,
    }
}

export function addLogic(logicIndex, argName, logicName){
    return {
        type: ADD_LOGIC,
        logicIndex,
        argName,
        logicName
    }
}

export function storeValue(){
    return{
        type: STORE_VALUE
    }
}