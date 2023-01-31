/*
title: uptime monitoring application
description: a restfull api
time: 31/1/23
author: anisul islam anis

*/

//dependencies
const http = require("http")

//app modeling- object scaffolding
const app = {}

// configuration
app.config = {
    port: 3000


}

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`)
    })
}

//handle request response

app.handleReqRes = (req, res) => {
    //handle response

    res.end("hello world")
}


//start the server

app.createServer()