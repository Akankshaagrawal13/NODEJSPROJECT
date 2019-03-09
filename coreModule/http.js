const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200,"Server Created");
    res.end("ok");
});

server.listen(3000 , ()=>{
    console.log('listening on port 3000')
})