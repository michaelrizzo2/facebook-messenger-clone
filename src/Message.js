import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import "./Message.css"
const Message =forwardRef(({message,userName},ref)=> {
    const isUser=userName===message.userName
   
return (
    <div className="messageBox">
           
       
            
            <Card style={{borderRadius:'1.3em',lineHeight:'1.34',width:'fit-content'}} >
                <CardContent className={isUser?'message_usercard' : 'message_guestcard'} style={{paddingTop:'6px',paddingRight:'12px',paddingBottom:'7px',paddingLeft:'12px'}}>
                    <Typography  variant="h5" component="h2">
                            {!isUser && `${message.userName} :`}   {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>


)
})
export default Message
