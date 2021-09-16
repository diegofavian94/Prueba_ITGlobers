import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [valNav, setvalNav] = useState("")
  function valorNav(valor){
    setvalNav(valor)
  }
  return (
    <div className="App">
      <Navbar valorNav={valorNav}/>
      <Form valorNav={valNav}/>
    </div>
  );
}

export default App;
