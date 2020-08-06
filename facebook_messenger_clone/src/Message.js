import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import "./Message.css"
const Message =forwardRef(({message,userName},ref)=> {
    const isUser=userName===message.userName
    console.log(userName)
    console.log(message.UserName)
    console.log(isUser)
    return (
        <div className="message_box">
            <div ref={ref} className={`message ${isUser && "message_user"}`} >
            <Card className={isUser ? "message_usercard" : "message_guestcard"}>
                <CardContent>
                    <Typography color="White" variant="h5" component="h2">
                        {!isUser && `${message.userName} :`}   {message.message}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}
)
export default Message
