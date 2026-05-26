const http = require('http');
const port = 3000;
const ip = "127.0.0.1";

const server = http.createServer((req, res) => {
    console.log(res);
    const path = req.url;
    if(path===`/`){
        res.end("This is START !!!")
    }
    else if (path === '/overview') {
        res.end('This is Overview');
    } 
    else if (path === '/profile') {
        res.end('Welcome to Profile');
    } 
    else {
        res.end('Error 404 THIS ROUTE DNE');
    }
});

server.listen(port, () => {
    console.log(`Listening on http://${ip}:${port}`);
});