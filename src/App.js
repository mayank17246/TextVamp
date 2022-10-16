//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//let naming = "Billionare Mayank";
function App() {
  const [mode,setMode] = useState('light'); // Whether the dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#101010';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is amazing';
      // }, 1200);
      // setInterval(() => {
      //   document.title = 'Install Textutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>

    <Navbar title="TextVamp" aboutText="About us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-4">
    <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />}/>
    </Routes>
      
    {/* <About/> */}
        
    </div>
    </Router>
    </>
  );
}

export default App;
