const express = require("express")
const app = express()
const http = require("http")
const httpserver=http.createServer(app)  
const {Server}=require("socket.io")
const io=new Server(httpserver)
io.on('connection',(socket)=>{
    console.log("Client connected")
})
app.use(express.urlencoded({extended:false}))
app.use(express.static("."))
app.post("/notice",(req,resp)=>{
    const msg=req.body.msg
    io.emit("notice",msg)
    resp.send("Notice sent")
})
httpserver.listen(3000,()=>{console.log("server started")})