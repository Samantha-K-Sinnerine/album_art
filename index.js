const http = require('http');
const port = 3000;
const server = http.createServer() ;

server.on("request", connection_handler) ;
function connection_handler(req, res) {
    console.log(`New Request for ${req.url} from ${req.socket.remoteAddress}`);
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("replace with home")
    } 
    else if(req.url === "/favicon.ico") {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("replace with favicon")
    }
    else if(req.url === "/images/banner.jpg") {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("replace with image")          
    }
    else if(req.url.startsWith("/album-art/")) {
        res.writeHead(200, {"Content-Type": "text/html"}); ; 
        res.end("replace with album-art")           
    }
    else if(req.url.startsWith("/search")) {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("replace with search")       
    }
    else {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("replace with 404")
    }
}

server.on("listening", listening_handler) ;
server.listen(port) ;
function listening_handler() {
    console.log (`Now Listening on Port ${port}`);
}

/*
first request is for the root of our site --> /
New Request for / from ::1
second request is for the favicon.ico file which is the icon that appears in the browser tab
New Request for /favicon.ico from ::1
*/

//Routing allows us to handle different requests differently and segment our traffic

