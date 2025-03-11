let http = require('http');
let httpServer = http.createServer((req, res) => {
    res.end("Hello, world!");    
});
httpServer.listen("8000")