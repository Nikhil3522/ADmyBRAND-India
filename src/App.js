import { useState } from 'react';
import './App.css';
import AddArg from './components/AddArg';
import AllLogic from './components/AllLogic';

function App() {
  const [totalArg, setTotalArg] = useState(1);
  const [result, setResult] = useState('undefined');

  function handleResult(value) {
    setResult(value);
  }

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

        <AllLogic onChange={handleResult} />

        <h1>Result: {result}</h1>
    </div>
  );
}

export default App;
