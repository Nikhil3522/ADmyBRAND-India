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
// habitTracker: [],
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

            var tempArr;
            console.log("logic", action.logicIndex)
            // state.logicArr != null ?
            state.logicArr[action.logicIndex] = action.logicName
            // tempArr = [...state.logicArr, action.logicName]:
            // state.logicArr[0] = action.logicName;

            // console.log("state.logicArr.length", state.logicArr.length)
            // var size2 = (state.logicArr===null ? 0 : 0);
            // for(let i=0; i< size2; i++){
            //     if(i == action.logicIndex){
            //         state.logicArr[i] = action.logicName;
            //         return state
            //     }
            // }
            

            return {
                ...state,
                // logicArr: [...tempArr]
            }
        case STORE_VALUE:
            return store;
        default:
            return state;
    }
}