const http = require('http')

const PORT = 3000

const friends = [
    {
        id: 1,
        name: 'mike'
    },
    {
        id: 2,
        name: 'kevin'
    },
    {
        id: 3,
        name: 'frank'
    },
]

const server = http.createServer((req, res) => {
    const items = req.url.split('/')  // /friends/2 => ['', 'friends', '2']
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString() // get buffer from client, convert to string first
            console.log('data in request:', friend);
            friends.push(JSON.parse(friend)) // convert to json
        });
        req.pipe(res);
    }

    else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        if (items.length === 3) {
            res.end(JSON.stringify(
                friends.filter(friend => friend.id == items[2])
            ))
        } else {
            res.end(JSON.stringify(friends))
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1> hihi </h1>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else {
        res.statusCode = 404
        res.end("page not found")
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

