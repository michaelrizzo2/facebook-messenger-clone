import React,{useState} from 'react';
import './App.css';

function App() {
  const [input,Setinput]=useState("")
  const [messages,setmessages]=useState([])
  const sendMessage=event =>
  {
    setmessages([...messages,input])
    Setinput('')
  }
  return (
    <div className="App">
    <h1>Hello Programmers</h1>

    <input  value={input} onChange={event=>Setinput(event.target.value)}/> 
    <button onClick={sendMessage}> Send Message</button>
    {/* the messages*/}
    {
      messages.map( message=>{
        <p>{message}</p>}
      )
    }
    </div>
  );
}

export default App;
