import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { useDispatch } from "react-redux";
import { addArg } from "../actions";
import { addLogic} from "../actions";

function AddArg(){
  const dispatch = useDispatch();
    const options = [
      {
        id: 0,
        name: "False"
      },
      {
        id:  1,
        name: "True"
      }
    ];

    const [inputValue, setInputValue] = useState({
      argName: "New Arg",
      value : null
    });

    useEffect(() =>{
      // console.log("value", inputValue)
      dispatch(addLogic(-1, inputValue.argName,  inputValue.value))
      
    }, [inputValue])
    return(
        <div>
            <div className=" containerAdd w-[320px] my-2.5">
                <input
                  type="text" 
                  value={inputValue.argName} 
                  onChange={(e) => setInputValue(prevState => ({
                    ...prevState,
                    argName: e.target.value
                  }))} 
                  className="flex-row w-52 border-2"
                />
                <div className="w-28">
                  <Select 
                    options={options} 
                    labelField="name" 
                    valueField="id" 
                    className="w-44"
                    onChange={(values) => setInputValue(prevState => ({
                        ...prevState,
                        value: values[0].name
                      }),
                      dispatch(addArg(inputValue.argName, values[0].name)))
                      
                      
                    } 
                  />
                </div>
            </div>
        </div>
    );
}

export default AddArg;