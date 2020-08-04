import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import "./Message.css"
function Message({message,userName}) {
    const isUser=userName===message.username
    return (
            <Card className={`message ${isUser && "message_user"}`}>
                <CardContent>
                    <Typography color="White" variant="h5" component="h2">
                        {message.userName} : {message.text}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Message
