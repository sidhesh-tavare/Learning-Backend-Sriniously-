const fs = require('fs');
const superagent = require('superagent');

fs.promises.readFile(`${__dirname}/dog.txt`, 'utf-8')
    .then(data=>{
        return superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    })
    .then(res=>{
        fs.promises.appendFile(
            'dog-file.txt',
            `\n${res.body.message}`
        )})
    .then(()=>console.log(`Dog image URL saved !`))
    .catch(err=>console.log(err.message));

    