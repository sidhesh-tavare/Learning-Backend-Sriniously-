const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 3000;
const ip ="127.0.0.1";
const slugify = require(`slugify`);
const server = http.createServer((req,res)=>{
    const text = "fresh avocados!for 5 dollars only"
    res.end(slugify(text,'_'));
})

server.listen(port,ip, () => {
    console.log(`Listening on http://${ip}:${port}`);
});