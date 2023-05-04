const fs = require('fs')

fs.unlink('exemplo.txt', (err)=>{
    if (err) throw err
    console.log('Arquivo deletado com sucesso');
})