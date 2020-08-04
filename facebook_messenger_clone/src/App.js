import React,{useState} from 'react';
import './App.css';
import {Button} from "@material-ui/core"

function App() {
  const [input,Setinput]=useState("")
  const [messages,setmessages]=useState([])
  const sendMessage=event =>
  {
    event.preventDefault()
    setmessages([...messages,input])
    Setinput('')
  }
  return (
    <div className="App">
    <h1>Hello Programmers</h1>
    <form>
    <input  value={input} onChange={event=>Setinput(event.target.value)}/> 
    <Button disabled={!input} type="submit" variant="outlined" color="primary" onClick={sendMessage}> Send Message</Button>
    </form>
    {/* the messages*/}
    {messages.map(message =>(
      <p>{message}</p>
    ))}
    </div>
  );
}

export default App;
