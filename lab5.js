require("dotenv").config()
const { header } = require("express/lib/request")
const http=require("http")
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>${process.env.SERVER} has been started`)
    resp.end()
})
server.listen(process.env.PORT,()=>{console.log("server has been started")})