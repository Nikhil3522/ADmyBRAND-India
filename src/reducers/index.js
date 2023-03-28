import { store } from '..';
import { 
    ADD_ARG,
    ADD_LOGIC,
    STORE_VALUE
} from '../actions';

const getLocalData = () => {
    let localData = localStorage.getItem("ArgStore");
    if(localData === []){
        return [];
    }else{
        return JSON.parse(localData);
    }
}

const initialState = {
allArg: {
    arg: getLocalData()
},
logicArr: []
}
export default  function arg (state = initialState, action){
console.log("Reducer", state);
    switch (action.type) {
        case ADD_ARG:

            const size = (state.allArg.arg===null ? 0 : state.allArg.arg.length);
            for(let i=0; i< size; i++){
                if(action.argName == state.allArg.arg[i][0]){
                    state.allArg.arg[i][1] = action.ArgValue
                    return state;
                }
            }

            var tempArr;
            state.allArg.arg != null ?
            tempArr = [...state.allArg.arg, [action.argName, action.ArgValue]]:
            tempArr = [[action.argName, action.ArgValue]]
            
            return {
                ...state,
                allArg: {
                    arg: [...tempArr]
                }
            };

        case ADD_LOGIC:

            if(action.logicIndex == -1){
                const size2 = (state.logicArr===null ? 0 : state.logicArr.length);
                for(let i=0; i< size2; i++){
                    if(action.argName == state.logicArr[i][0]){
                        state.logicArr[i][1] = action.logicName
                        return {
                            ...state,
                        }
                    }
                }
                return {
                    ...state,
                }
            }
            
            var temparr = [action.argName, action.logicName];
            state.logicArr[action.logicIndex] = temparr;

            return {
                ...state,
            }
        case STORE_VALUE:
            return store;
        default:
            return state;
    }
}