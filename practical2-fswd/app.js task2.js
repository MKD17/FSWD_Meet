const port =5000;
const http=require('http')
const fs=require('fs')
http.createServer((q,r)=>{
r.writeHeader(200,{'Content-Type':'text/html'});
fs.readFile('index.html',(err,data)=>{
r.write(data);
r.end("Ending the response...");
})
}).listen(port);