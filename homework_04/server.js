const http = require('http');
const { fork } = require('child_process');
const { Subject } = require('rxjs');
const qs = require('querystring');
const url = require('url');

const subject = new Subject();

subject.subscribe((serverObj) => {
    var str = serverObj.req.url.split('?')[1];
    const childProcess = fork('process-chunk.js');
    childProcess.send(qs.parse(str));

    childProcess.on('message', chunk => {
        serverObj.res.write(chunk.toString());
    });

    childProcess.on('exit', () => {
        serverObj.res.end();
    });
})

http.createServer((req, res) => 
{
    if (req.url == '/favicon.ico') 
        res.end(); 
    else
        subject.next({ req: req, res: res })
}).listen(4000);