const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {

    if (err) {
        console.log('File Error:', err.message);
        return;
    }

    const breed = data.trim();

    superagent
        .get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .end((err, res) => {

            if (err) {
                console.log('API Error:', err.message);
                return;
            }

            console.log(res.body.message);

            fs.appendFile(
                'dog-file.txt',
                `\n${res.body.message}`,
                err => {
                    if (err) {
                        console.log('Write Error: ', err.message);
                        return;
                    }

                    console.log('Dog image URL saved');
                }
            );
        });
});
