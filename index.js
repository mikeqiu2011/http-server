const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/friends') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })

        res.end(JSON.stringify({
            name: 'mike',
            age: 30
        }))
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

