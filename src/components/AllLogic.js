import { useState, useEffect } from "react";
import Logic from "./Logic";
import { useDispatch } from "react-redux";
import { addLogic} from "../actions";

function AllLogic(props){
    const dispatch = useDispatch();
    const [totalLogicComp, setTotalLogicCom] = useState(1);
    const increaseComp = () => {
        setTotalLogicCom(totalLogicComp + 2);
    }
    const updateAllLogicStore = (index, name,  value) => {
        dispatch(addLogic(index, name,  value));
    }
  
    return(
        <div>
            <div className="m-[auto] w-44 my-2">
                {Array(totalLogicComp).fill().map((_, index) => (
                    <Logic
                        key={index} 
                        index={index}
                        onClickAndOr={increaseComp}
                        updateAllLogicStore={updateAllLogicStore}
                    />
                ))
                }
            </div>
            {totalLogicComp > 1 ?
                <div 
                    className='button border-2 w-32 py-1 rounded-lg m-[auto] cursor-pointer shadow-sm hover:shadow-lg'
                    onClick={() => { setTotalLogicCom(totalLogicComp + 1)}}
                    >
                    <h4>+ add op</h4>
                </div>
                :
                null
            }
            
        </div>
    )
}

export default AllLogic;