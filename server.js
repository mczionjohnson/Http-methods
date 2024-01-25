const http = require('http');


const requestHandler = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    if (req.url === '/books' && req.method === 'GET') {
        res.writeHead(200);
        res.end("Getting all the books");
    } else if (req.url === '/books' && req.method === 'PUT') {
        res.writeHead(200);
        res.end("Editing a book");
    } else if (req.url === '/books' && req.method === 'DELETE') {
        res.writeHead(200);
        res.end("Deleting a book")
    } else if (req.url === '/books/author' && req.method === 'GET') {
        res.writeHead(200);
        res.end("Getting all the authors for the books");
    } else if (req.url === '/books/author' && req.method === 'POST') {
        res.writeHead(200);
        res.end("Creating a new author");
    } else if (req.url === '/books/author' && req.method === 'PUT') {
        res.writeHead(200);
        res.end("Editing an existing author");
    } else {
        res.writeHead(404);
        res.end("Error");
    }

}
const server = http.createServer(requestHandler);

server.listen(5000, () => {
    console.log('server is running');
});

