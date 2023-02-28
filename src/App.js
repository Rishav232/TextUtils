import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React , {useState} from 'react'
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//this is jsx file
function App() {

  

  const [mode,setMode]=useState("white");
  const toggleMode=()=>{
      if(mode==="white")
      {
      setMode("dark"); 
      document.body.style.backgroundColor="#0f0641";
      showAlert(`Changed to dark mode`,"success")
      }
      else{
        setMode("white"); 
        document.body.style.backgroundColor="white";
        showAlert(`Changed to light mode`,"success")

      }

    // else{
    //   setMode(e.target.value);
    //   document.body.style.backgroundColor=e.target.value;
    //   showAlert(`Changed to ${e.target.value} mode`,"success")
    // }
  }
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    
      setAlert({
      msg:message,
      type:type
        })

      setTimeout(()=>
      {
        setAlert(null);
      },1500)
  }
  return (
    <>
    {/* <Navbar title="React" aboutText="aboutReact"/> */}
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mt-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="This is my TextArea" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}/>
        </Routes>    
      </div>
    </BrowserRouter>
    </>
  );
}
//props is used for passing  properties to the component.
export default App;
