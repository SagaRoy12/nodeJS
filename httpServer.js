const http = require ('http')
const fs = require('fs')
const port = process.env.PORT || 3000;  // listen to the port whatever you get or listen to 3000

const server = http.createServer((req , res)=>{
    //res.statusCode = 200;
    res.setHeader('Content-Type',('text/html')) // header that is text or html type
    console.log(res.url)
    if(req.url=='/'){
        res.statusCode =200;
        res.end('<h><b>THIS IS THE FIRST PAGE</b></h>  <P><b>Just a random page</b></P>')
    }
    else if(req.url =='/about'){
        res.statusCode =200;
        res.end('<h><b>THIS IS ABOUT PAGE</b></h>  <P><b>HI i am Sagar</b></P>')
    }
    else if(req.url =='/hi'){
        res.statusCode =200;
        const data = fs.readFileSync('index.html') // reading another file and rendering it 
        res.end(data.toString())
    }
    else{
        res.statusCode=404;
        res.end('<h><b>THIS PAGE IS NOT FOUND</b></h>  <P><b>The oage is not available in the server</b></P>')
    }
})  // method to create http server

server.listen(port, ()=>{
    console.log(` the server is listening  ${port}`);
})