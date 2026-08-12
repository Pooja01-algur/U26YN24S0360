const http=require("http");
const server=http.createServer((req,resp)=>{
    if(req.method=="POST"){
        let body=``
        req.on("data",(chunk)=>{
            body=body+chunk
        })
        req.on("end",()=>{
            let data=JSON.parse(body)
            console.log(data)
            resp.writeHead(200,{"content-type": "text/html"})
            resp.write(`<h1>your information recieved</h1>`)
            resp.end()
    })
    }
})

server.listen(3000,()=>{console.log("server has been started")})
