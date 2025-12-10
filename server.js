const http = require("http");
const url = require(`url`);
const fs = require(`fs`);
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);

    if(requestUrl === `/`) {
        fs.readFile(`index.html`, (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`File not found.`);
            } else {
                response.write(fileContent);
            }
            response.end();
        });

    } else if (requestUrl === `/about`) {
        fs.readFile(`about.html`, (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`File not found.`);
            } else {
                response.write(fileContent);
            }
            response.end();
        });

    } else if (requestUrl === `/contact`) {
        fs.readFile(`contact.html`, (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`File not found.`);
            } else {
                response.write(fileContent);
            }
            response.end();
        });

    } else if (requestUrl === `/favicon.ico`) {
        response.writeHead(204); // No content
        response.end();
        
    } else {
        response.writeHead(404);
        response.write(`${requestUrl} path not found.`);
        response.end();
    }

});

server.listen(port, error => {
    if(error){
        console.log(error);
    } else {
        console.log(`server is listening on port ${port}.`);
    }
    
});