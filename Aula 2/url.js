const url = require('url')

//url.parse serve para tratar um endereço
const endereco = 'http://localhost:8080/default.htm?year=2023&month=March'
const qr = url.parse(endereco, true)

console.log(qr.host)
console.log(qr.pathname)
console.log(qr.search)
console.log(qr.host + '/nomeDomeuCaminho')

//const qData = qr.query
//console.log(qData.month);