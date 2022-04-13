import './App.css';
import Profile from './components/Profile'
import axios from 'axios'
import React, {useState, useEffect, useMemo} from 'react';
function App() {
  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false)
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((res) => {
      setProfile(res.data)
    })
    .catch((err) => {console.log(err)})
  }, [count])

  // si le count change, je l'autorise à recalculer 
  const memorizedValue =  useMemo(() => {
    console.log("je suis dans isOverTen")
    return count > 10 
  },[count] )


  const goDark = () => {
    setDark(!dark); 
    if(!dark){
      document.body.classList.add("bg-secondary")
    }
    else{
      document.body.classList.remove('bg-secondary')
    }
  }
  const classBtnTheme = dark ? 'btn-light' : 'btn-dark'
  const textTheme = dark ? 'rendre clair' : "rendre sombre"

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>
      {memorizedValue && <div className="alert alert-danger">STOP !!!</div>}
      <button className="btn btn-info mb-3" onClick={()=> {setCount(count + 1)}}>Increment {count}</button>
      <button className={`btn ${classBtnTheme} float-right mb-3`} onClick={goDark} >{textTheme}</button>
        <Profile id={count} profile={profile}></Profile>
    </div>
  );
}

export default App;
