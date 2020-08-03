import React,{useState} from 'react';
import './App.css';

function App() {
  const [input,Setinput]=useState("")
  return (
    <div className="App">
    <h1>Hello Programmers</h1>
    {/*input field */}
    {/* button*/}
    {/* the messages*/}
    <input  value={input} onChange={event=>Setinput()}/> 
    <button> Send Message</button>
    </div>
  );
}

export default App;
