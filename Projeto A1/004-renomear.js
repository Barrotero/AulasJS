const fs = require ('fs')
fs.rename('clubesDeFutebol.txt', 'meuFile.txt', (err)=>{
    if(err) throw err
    console.log('Renomeado com sucesso!');
})