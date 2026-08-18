const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("index.html",(error,content)=>{
            if(error){console.log("Error");}
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
    else if(req.url=="/about"){
        fs.readFile("about.html",(error,content)=>{
            if(error){console.log("Error");}
            else{

                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
    else if(req.url=="/course"){
        fs.readFile("course.html",(error,content)=>{
            if(error){console.log("Error");}
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
    else if(req.url=="/contact" && req.method=="GET"){
        fs.readFile("contact.html",(error,content)=>{
            if(error){console.log("Error");}
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(content);
            }
        })
    }
  
    
    else if(req.method=="POST" && req.url=="/contact"){
        //step 8 on data event
        let body=``;
        req.on("data",(chunks)=>{
            body=body+chunks
        })
        //step 9 on end event         
        req.on("end",()=>{
            let data=new URLSearchParams(body);
            console.log(`contact no:${data.get("contact no")}`)
            console.log(`Name:${data.get("name")}`)
        })
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h2>Your information has been received</h2>")
        res.end();

    }
    else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end("No information is available");
    }    
})
server.listen(3000,()=>{console.log("server has been started")})