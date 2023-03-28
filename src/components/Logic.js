import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { store } from "../index";
import { useDispatch } from "react-redux";

function Logic(props){
    const dispatch = useDispatch();
    const options = [
        {
          id: 1,
          name: "Constant",
          value: "Constant"
        },
        {
          id:  2,
          name: "argument",
          value: "argument"
        },
        {
            id:  3,
            name: "and",
            value: "and"
        },
        {
            id:  4,
            name: "or",
            value: "or"
        }
    ];

    const boolean = [
        {
            id: 0,
            name: "False",
            value: "False",
        },
        {
            id: 1,
            name: "True",
            value: "True"
        }
    ]

    const [optionData, setOptionData] = useState(options);
    const [selectOption, setSelectOption] = useState(null);
    const [result, setResult] = useState(null);
    // const [allArg, setAllArg] = useState(null);

    

    const allArgOption = async () => {
        console.log("allArgOption");
        const storeData = await store.getState().allArg.arg;
        if(storeData){
            const outputList = await storeData.map((item, index) => {
                const dict = { id: index + 1,
                    name: item[0],
                    value: item[1] 
                };
                return dict;
            });
            setOptionData(outputList);
        }else{
            setOptionData([{
                id: 1,
                name: "No Data"
            }])
        }
    }

    useEffect(() => {
        if(selectOption){
            if(selectOption[0].name === "Constant"){
                setOptionData(boolean);
                setSelectOption("True");
                setResult("True")
                handleChange();
            }else if(selectOption[0].name === "argument"){
                allArgOption();
            }else if(selectOption[0].name === "and" || selectOption[0].name === "or"  ){
                props.onClickAndOr();
            }
        }
        
    }, [selectOption]);

    useEffect(() => {
        handleChange();
    }, [result]);

    function handleChange(name, value) {
        if(value == "True" || value == "False" || value == "and" || value == "or" || value == "undefined"){
            // props.onChange(value);
            props.updateAllLogicStore(props.index, name, value)
            // dispatch(addLogic(value));
        }
        
    }

    return (
        <div className="containerAdd my-1">
            <div className="w-32">
                <Select 
                    options={optionData} 
                    labelField="name" 
                    valueField="id" 
                    className="w-44"
                    onChange={(values) => {
                        console.log("values", values)
                        setSelectOption(values)
                        handleChange(values[0].name, values[0].value)
                        }
                    } 
                />
            </div>
            <div 
                className="border-2 w-12"
                onClick={() => {
                    setResult(null)
                    setOptionData(options)
                    handleChange('undefined')
                }}
            >
                X
            </div>
        </div>
        
    )
}

export default Logic;