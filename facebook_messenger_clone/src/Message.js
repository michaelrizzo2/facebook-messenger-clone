import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import "./Message.css"
function Message({message,userName}) {
    const isUser=userName===message.userName
    return (
        <div className={`message ${isUser && "message_user"}`} >
            <Card className={isUser ? "message_usercard" : "message_guestcard"}>
                <CardContent>
                    <Typography color="White" variant="h5" component="h2">
                        {message.userName} : {message.message}
                    </Typography>
                </CardContent>
            </Card>
            </div>
    )
}

export default Message
