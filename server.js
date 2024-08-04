const http = require('node:http');
const fs = require('fs');



const server = http.createServer((req, res)=>{
    const pathName = req.url;

    if(pathName === '/' || '/about'){
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end("BAS SAHYPA")
    } else if(pathName === '/wakalar'){
        res.writeHead(200)
        res.end("THIS IS WAKALAR")
    }else{
        res.end("404 NOT FOUND")
    }
})

server.listen(2000,'127.0.0.1', ()=>{
    console.log("2000 start")
})