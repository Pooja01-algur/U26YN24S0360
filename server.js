const http=require("http");
const server=http.createServer((req,resp) => {
    resp.writeHead(200, {"Content-type": "text/html"});
    resp.end(`<h1> Hello </h1> <h1>uucms no:-360</h1> <h1>name:Pooja</h1`);
    
    
});
server.listen(3000, ()=>console.log("server has been started"));