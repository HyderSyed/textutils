import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { Routes } from "react-router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
    <>
    {/* <Navbar title = "Textutils2" aboutText = "About Textutils"/> */}
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
    </div> */}

  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>}>
            {/* <About /> */}
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}>
            {/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> */}
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
