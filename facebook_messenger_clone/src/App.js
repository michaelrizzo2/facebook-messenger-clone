import React,{useState} from 'react';
import './App.css';
import {Button} from "@material-ui/core"
import {FormControl,Input,InputLabel} from "@material-ui/core"
import Message from "./Message"

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
      <FormControl> <InputLabel >Enter your Message</InputLabel>
      <Input value={input} onChange={event=>Setinput(event.target.value)} />
    <Button disabled={!input} type="submit" variant="outlined" color="primary" onClick={sendMessage}> Send Message</Button>
      </FormControl>
    </form>
    {/* the messages*/}
    {messages.map(message =>(
      <Message text={message}/>
    ))}
    </div>
  );
}

export default App;
