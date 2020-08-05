import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from "@material-ui/core"
import {FormControl,Input,InputLabel} from "@material-ui/core"
import Message from "./Message"
import firebase from "firebase"
import db from "./firebase"
import FlipMove from "react-flip-move"

function App() {
  const [input,Setinput]=useState("")
  const [messages,setmessages]=useState([])
  const [userName,setUsername]=useState("")
useEffect(()=>{
db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot=>
{
  setmessages(snapshot.docs.map(doc =>({id:doc.id,message: doc.data()})))
})
},[])

useEffect(() => {
 //const name=prompt("Please enter your name")
 setUsername(prompt("please enter your name"))
}
, [])


  const sendMessage=event =>
  {
    event.preventDefault()
    db.collection("messages").add({
      message:input,
      userName:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
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
    <FlipMove>
    {messages.map(({id,message}) =>(
      <Message key={id} username={userName} message={message}/>
    ))}
    </FlipMove>
    </div>
  );
}

export default App;
