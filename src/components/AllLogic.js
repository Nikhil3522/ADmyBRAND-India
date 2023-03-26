import { useState } from "react";
import Logic from "./Logic";

function AllLogic(props){
    const [totalLogicComp, setTotalLogicCom] = useState(1);
    const increaseComp = () => {
        setTotalLogicCom(totalLogicComp + 2);
    }
    return(
        <div>
            <div>
                {Array(totalLogicComp).fill().map((_, index) => (
                    <Logic
                        key={index} 
                        onChange={props.onChange}
                        onClickAndOr={increaseComp}
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