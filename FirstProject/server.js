const http = require('http');
const fs = require('fs');
const log = require('./logger');

http.createServer((req,res)=>{
  if(req.method == 'GET')
  {
      log('GET METHOD CALLED');
     // res.write('you called GET');
      //res.end();
      displayForm(res);
  }
  else if(req.method == 'POST'){
      log('POST METHOD CALLED');
      res.write('You called POST');
      res.end();
     }
}).listen(3000,()=>
{
    log('Listening on port 3000')
});

function displayForm(res){
    fs.readFile(__dirname+"/web/index.html",(err, data)=>{
        if(err) throw err;
        res.writeHead(200,'{Content-Type="text/html"}');
        res.write(data);
        res.end('OK');
    })
}