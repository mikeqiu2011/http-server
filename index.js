const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json'
        // })
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            name: 'mike',
            age: 30
        }))
    } else if (req.url === '/messages') {
        res.write('<html>')
        res.write('<body>')
        res.write('<h1> hihi </h1>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

