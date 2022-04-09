# node native http server demo

## test post
    fetch('http://localhost:3000/friends', {
        method: 'POST',
        body: JSON.stringify({
            id: 4,
            name: 'eric'
        })
    })