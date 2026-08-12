const http=require("http");
const { URLSearchParams } = require("url");
const server=http.createServer((req,resp)=>{
if(req.method=="GET"){
    resp.writeHead(200, {"content-type":"text/html"})
    resp.write(`<form method="post">`)
    resp.write(`Rollno<input type="text" name="rno" required /><br>`)
    resp.write(`Name<input type="text" name="name" required /><br>`)
    resp.write(`<button type="submit">Save</button>`)
    resp.write(`<form>`)
    resp.end();
}
else if(req.method=="POST"){
    let body=``;
    req.on("data",(chunks)=>{
        body=body+chunks
    })
    req.on("end",()=>{
        let data=new URLSearchParams(body);
        console.log(`Rollno=${data.get("rno")}`)
        console.log(`name=${data.get("name")}`)
    })
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>your information has been recieved</h1>`)
    resp.end();
}
})
server.listen(3000, ()=>{console.log("server has been started")})