
const http = require('http');
const url = require('url');

const port = 3000;
const ip ="127.0.0.1";

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Hello World!");
});

server.listen(port,()=>{
    console.log(`Listening on Port http://${ip}:${port}`);
});
