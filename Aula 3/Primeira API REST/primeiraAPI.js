const express = require('express')
const server = express()
const products = require('./src/data/produtos.json')

server.get('/usuarios', (req, res)=>{
    res.json({user: 'Joaquim José'})
})

server.get('/games', (req, res)=>{
    res.json({game: 'Sonic'})
})

server.get('/', (req, res)=>{
    res.json({message: 'Oi meuzamigo!'})
})

server.get('/products', (req, res)=>{
    res.json(products)
})

server.listen(8080, () => { console.log('Rodando na Porta 8080');})