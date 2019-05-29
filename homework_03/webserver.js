const http = require('http');
const fileSystem = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    let filePath = path.join(__dirname, 'big.txt');

    res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment; filename=" + 'big.txt'
    });

    var startStream = new Date();
    var readStream = fileSystem.createReadStream(filePath);
    var endStream = new Date() - startStream;
    console.log(`Execution time: ${endStream} ms`);
    readStream.pipe(res);

    var startFileSync = new Date();
    var readFileSync = fileSystem.readFileSync(filePath, 'utf8');
    var endFileSync = new Date() - startFileSync;
    console.log(`Execution time: ${endFileSync} ms`);
    res.write(readFileSync);

    var startFile = new Date();
    var readFile = fileSystem.readFile(filePath, 'utf8', function (err, data) 
    {
        var endFile = new Date() - startFile;
        console.log(`Execution time: ${endFile} ms`);
        res.write(data);
    });


}).listen(9999, () => {
    console.log("oi");
});