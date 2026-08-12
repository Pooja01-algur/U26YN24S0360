const http=require("http");
const server=http.createServer((req,resp)=>{
    resp.writeHead(200, {"content-type":"plain/html"});
    resp.write("<h1>BLDEA's college JKD</h1>");
    resp.write("<h2>started year 1963</h2>");
    resp.write("<h3>located in jamakhandi</h3>");
    resp.end();
});
server.listen(3000, ()=>console.log("server has been started"));
