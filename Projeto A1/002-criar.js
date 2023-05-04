const fs = require('fs')

fs.appendFile('clubesDeFutebol.txt', 'Palmeiras\n', (err)=>{
    if(err) throw err
    console.log('Arquivo criado com sucesso!');
})