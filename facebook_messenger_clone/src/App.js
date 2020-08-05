import React,{useState,useEffect} from 'react';
import './App.css';
import {FormControl,Input,InputLabel,IconButton} from "@material-ui/core"
import Message from "./Message"
import firebase from "firebase"
import db from "./firebase"
import FlipMove from "react-flip-move"
import SendIcon from '@material-ui/icons/Send';

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
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" style={{marginTop:'3px'}} />
    <h1>Hello Programmers</h1>
    <h2>Welcome {userName}</h2>
    <form className="app_form">
      <FormControl> <InputLabel >Enter your Message</InputLabel>
      <Input value={input} onChange={event=>Setinput(event.target.value)} />
    <IconButton disabled={!input} type="submit" variant="outlined" color="primary" onClick={sendMessage}> <SendIcon /> </IconButton>
      </FormControl>
    </form>
    {/* the messages*/}
    <FlipMove>
    {messages.map(({id,message}) =>(
      <Message key={id} userName={userName} message={message}/>
    ))}
    </FlipMove>
    </div>
  );
}

export default App;
