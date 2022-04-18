import './App.css';
import FancyInput from './components/FancyInput'
import {useRef} from 'react'



function App() {
  const date = new Date();
  const fancyInputRef = useRef()
  const focusInput = (val) => {
    console.log(val)
    fancyInputRef.current.focus(val)
    fancyInputRef.current.countMax()
      
  }
  return (

    <div className="App">
{/*         <Title/> */}
        <FancyInput ref={fancyInputRef}></FancyInput>
        <button onClick={() => focusInput(date.getDay())}>Cliquer</button>
    </div>
  );
}

export default App;
