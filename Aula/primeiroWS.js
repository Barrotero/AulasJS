const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})

    let queryData = url.parse(req.url, true).query
    if(queryData.name)
        res.end(`Oi, ${queryData.name}`)
    else
        res.end('Oi, my consagrated!') 
}).listen(8080)

