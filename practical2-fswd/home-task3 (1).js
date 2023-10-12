const http=require('http')
const fs= require('fs')
const port=5000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
      // Read the contents of the HTML file
      fs.readFile('home.html', 'utf-8', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error Status code 500 ');
        } else {
          // Set the appropriate headers
          res.setHeader('Content-Type', 'text/html');
          
          // Write the HTML file contents to the response
          res.write(data);
          res.end("<hr> ");
        }
      });
    }
    else if (req.url==='/aboutus'){
        //console.log("In about us ")
        fs.readFile('aboutus.html','utf-8',(err,data)=>{
            console.log(data)
            if (err) {
                console.log(err)
                res.statusCode = 500;
                res.end('Error Status code 500 ');
              } else {
                // Set the appropriate headers
                res.setHeader('Content-Type', 'text/html');
                
                // Write the HTML file contents to the response
                res.write(data);
                res.end("<hr> ");
              }
        })
    }
    else if(req.url==='/feed'){
        fs.readFile('feed.html','utf-8',(err,data)=>{
            console.log("In feedback")
            if (err) {
                console.log(err)
                res.statusCode = 500;
                res.end('Error Status code 500 ');
              } else {
                // Set the appropriate headers
                res.setHeader('Content-Type', 'text/html');
                
                // Write the HTML file contents to the response
                res.write(data);
                res.end("<hr> ");
              }
        })
    }
    else{
        res.statusCode = 404;
    res.end('Page Not Found');
    }
}).listen(port);