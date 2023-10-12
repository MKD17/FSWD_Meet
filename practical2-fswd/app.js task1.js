const http=require('http');
const port=5000;
const server1=http.createServer((q,r)=>{
r.write("This is the response from server !\n\n\n")
r.end("ENDING THE RESPONSE FROM SERVER...");
});
server1.listen(port,()=>{
console.log(`Listening on port ${port} .`);
});