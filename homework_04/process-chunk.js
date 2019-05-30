const fs = require('fs');
const path = require('path');

process.on('message', (fileObject) => {

    let dir = path.join(__dirname, fileObject.filename);
    var readable = fs.createReadStream(dir.toString(), 'utf8');

    readable.on('data', chunk => {
        process.send(chunk);
    });

    readable.on('end', (data) => {
        process.exit(0);
    });
});