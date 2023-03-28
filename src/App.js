import { useState, useEffect } from 'react';
import './App.css';
import AddArg from './components/AddArg';
import AllLogic from './components/AllLogic';
import { useSelector } from 'react-redux';
import { store } from "./index";

function App() {
  const [totalArg, setTotalArg] = useState(1);
  const [result, setResult] = useState('undefined');

  // const myStoreProperty = store.getState();
  const myStoreProperty = useSelector(state => store.getState());

  function applyAndLogic(arr) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
      result = result && (arr[i] === "True" ? true : false);
    }
    if(result){
      return "True"
    }else{
        return "False"
    }
  }
  
  function applyOrLogic(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
      result = result || (arr[i] === "True" ? true : false);
    }
    if(result){
      return "True"
    }else{
        return "False"
    }
  }

  function calResult(arr){
    console.log("arr", arr)
    var tempArr=[];
    var tempIndex = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i] == "True" || arr[i] == "False"){
        tempArr[tempIndex] = arr[i];
        tempIndex++;
      }else if(arr[i] == "and" || arr[i] == "or"){
          var tempResult
          if(arr[i] == "and"){
            tempResult =  applyAndLogic(tempArr);
          }else if(arr[i] == "or"){
            tempResult =  applyOrLogic(tempArr);
          }
          // int n = arr.length -i
          arr.splice(0, i+1, tempResult);
          i = -1;
          tempArr=[];
          tempIndex = 0;
      }
    }
    // return arr[0];
    console.log("function", arr[0])
    if (arr.length === 1) {
      const newResult = arr[0].toString();
      if (newResult !== result) {
        setResult(newResult);
      }
    }
  }

  // useEffect(() =>{
  //   console.log("New result", result)
  //   setResult(result);
  // }, [myStoreProperty, result])
  useEffect(() => {
    console.log('updated22:', myStoreProperty);
    var myArray = myStoreProperty.logicArr;

    var temArr = myArray.slice();

    temArr.reverse();
     calResult(temArr); 
  }, [myStoreProperty]);
  return (
    <div className="App">
      {Array(totalArg).fill().map((_, index) => (
        <AddArg key={index} />
      ))}
        <div 
          className='button border-2 w-32 py-1 rounded-lg m-[auto] cursor-pointer shadow-sm hover:shadow-lg'
          onClick={() => { setTotalArg(totalArg + 1)}}
        >
          <h4>+ add arg</h4>
        </div>

        <AllLogic />

        <h1>Result: {result}</h1>
    </div>
  );
}

export default App;
