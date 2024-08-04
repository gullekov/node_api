const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res)=>{
    const pathName = req.url;

    if(pathName === '/' || '/about'){
        res.end("THIS IS ABOUT PAGE")
    } else if(pathName === '/wakalar'){
        res.end("THIS IS WAKALAR")
    }else{
        res.end("404 NOT FOUND")
    }
})

server.listen(8000, 'localhost', ()=>{
    console.log("8000 start")
})