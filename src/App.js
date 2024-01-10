import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode ] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{   
    if (mode==="light") {
      setMode("dark") 
      document.body.style.backgroundColor="grey"  
      showAlert("Drak mode is enabled","success")   
    }else{
      setMode("light")
      document.body.style.backgroundColor="white" 
      showAlert("Light mode is enabled","success")   

    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar
          title="TextUtils"
          aboutText= "about"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert}/>
        <Switch>
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/" >
            <TextForm
              heading="Enter you text here."
              showAlert={showAlert}
            />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
