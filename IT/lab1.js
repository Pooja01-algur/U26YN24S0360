const http=require("http");
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>BLDEA's Jamakhandi</h1>`)
    resp.write(`<h2>started year 1963</h2>`)
    resp.write(`<h3>Located in Jamakhandi</h3>`)
    resp.end();

})
server.listen(3000,()=>{console.log("server has been started")})










