const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    res.end('hello')
})

server.listen(8080, () => {
    console.log('server is listening on port 8080');
})
