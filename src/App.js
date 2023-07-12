/* eslint-disable jsx-a11y/anchor-is-valid */

// import logo from './logo.svg';

import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';

function App() {

  const [mode, setmode] = useState('light') // check dark mode enabled or not
  
  const [alert, setAlert] = useState(null)

  const showAlert =(message,Type)=>{
    setAlert({
      msg : message,
      type : Type
    })
    setTimeout(() => {
    setAlert(null)   
    }, 3000);
  }

  const toggleMode = () =>{
  if(mode === 'light')
  {
    setmode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode enabled","success");
    document.title = "TextUtils  - Dark mode";
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("light mode enabled","success");
    document.title = "TextUtils  - Light mode";
  }
}
  return (
  <>
<Navbar mode = {mode}  toggleMode = {toggleMode}/>
<Alert alert = {alert} />


<div className="container my-3">
<TextForm heading = "enter your text" Alert = {showAlert} />
<About/>
</div>

  </>
  );
}

export default App;
 