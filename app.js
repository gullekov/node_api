const http = require('http')
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res)=>{
    const pathName  = req.url;

    if(pathName === "/" || pathName === "/home"){
        res.write("Salam men node js bilen has gowu isleri amala asyryaryn");
        res.end();

    }
    else if(pathName === "/about"){
        res.writeHead(200)
        res.write("<h1>PAGE OF ABOUT</h1>")
        res.end();
    }
    else if(pathName === "/product"){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write("<h1>PRODUCT PAGE</h1>")
        res.end();
    }else if(pathName === '/api', 'utf-8'){
        fs.readFile(`${__dirname}/dev-data/data.json`, (err,data)=>{
            const productData = JSON.parse(data)
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(data)
        })
    }

    else{
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.write("404 not found")
        res.end()
    }
})
server.listen(8000, '127.0.0.1', ()=>{
    console.log("8000 port success")
})
