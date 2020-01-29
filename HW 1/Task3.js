const http = require('http');
const fs = require('fs');
// const filename = "index.html";
const header = "header.html";
const body = "body.html";
const footer = "footer.html";

http.createServer((require, response) => {
    let allContent = "";

    fs.readFile(header, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            allContent += data;
            fs.readFile(body, 'utf8', (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    allContent += data;
                    fs.readFile(footer, 'utf8', (err, data) => {
                        if (err){
                            console.log('Could not find or open file for reading\n');
                            response.statusCode = 404;
                            response.end();
                        } else {
                            console.log('');
                            response.writeHead(200, {'Content-Type': 'text/html'});
                            response.end(allContent);
                        }
                    });
                }
            });
        }
    });
    console.log("Request accepted");
}).listen(8080, ()=>{
    console.log("Http server works in 8080 port!\n");
});