import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
function Message(props) {
    return (
            <Card>
                <CardContent>
                    <Typography color="White" variant="h5" component="h2">
                        {props.username} : {props.text}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Message
