import React,{ useState, useCallback } from 'react';
import './App.css';
import Button from './components/Button'
import Count from './components/Count'

function App() {
  const [count1, setCount1] = useState({value:0, btnColor:'success', increment:25})
  const [count2, setCount2] = useState({value:0, btnColor:'danger', increment:20})

  const incrementCount1 = useCallback((val) => {
    count1.value < 100 && setCount1({...count1, value: count1.value + val})
  }, [count1])
  const incrementCount2 = useCallback((val) => {
    count2.value < 100 && setCount2({...count2, value: count2.value + val})
  }, [count2])

  console.log("appjs")
  return (
    <div className="App">
      <Count text="Count1" count={count1.value} bgColor={count1.btnColor} ></Count>
      <Count text="Count2" count={count2.value} bgColor={count2.btnColor} ></Count>
      <Button handleClick={incrementCount1} btnColor={count1.btnColor} increment={count1.increment}>Count 1</Button>
      <Button handleClick={incrementCount2} btnColor={count2.btnColor} increment={count2.increment}>Count 2</Button>
    </div>
  );
}

export default App;
