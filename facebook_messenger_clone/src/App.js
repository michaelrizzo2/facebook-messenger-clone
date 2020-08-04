import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from "@material-ui/core"
import {FormControl,Input,InputLabel} from "@material-ui/core"
import Message from "./Message"

function App() {
  const [input,Setinput]=useState("")
  const [messages,setmessages]=useState([{userName:"michael",text:"this is a test message"},{userName:"robert",text:"how are you doing?"}])
  const [userName,setUsername]=useState("")
useEffect(() => {
 //const name=prompt("Please enter your name")
 setUsername(prompt("please enter your name"))
}
, [])

  const sendMessage=event =>
  {
    event.preventDefault()
    setmessages([...messages,{userName:userName,text:input}])
    Setinput('')
  }
  return (
    <div className="App">
    <h1>Hello Programmers</h1>
    <h2>Welcome {userName}</h2>
    <form>
      <FormControl> <InputLabel >Enter your Message</InputLabel>
      <Input value={input} onChange={event=>Setinput(event.target.value)} />
    <Button disabled={!input} type="submit" variant="outlined" color="primary" onClick={sendMessage}> Send Message</Button>
      </FormControl>
    </form>
    {/* the messages*/}
    {messages.map(message =>(
      <Message username={userName} message={message}/>
    ))}
    </div>
  );
}

export default App;
