import { 
    ADD_ARG,
    ADD_LOGIC
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
            console.log("logic", state.logicArr)
            state.logicArr != null ?
            tempArr = [...state.logicArr, action.logicName]:
            tempArr = [action.logicName]
            

            return {
                ...state,
                logicArr: [...tempArr]
            }
        default:
            return state;
    }
}