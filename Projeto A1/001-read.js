const express = require('express')
const fs = require('fs')

const server = express()

server.get('/filmes', (req, res)=>{
    fs.readFile('filmes.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})
server.listen(8080, ()=> console.log('rodando na 8080'))