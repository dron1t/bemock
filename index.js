const http = require('http');
const fs = require('fs')

const responseDir = 'responses/'

const requestListener = function (req, res) {
    let fileName = `${req.url.replace(/\//g, "_").substr(1) || "default"}.json`

    res.setHeader("Content-Type", "application/json");
    fs.readFile(`${responseDir}${fileName}`, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.end();
            return;
        }
        res.writeHead(200);
        res.end(data);
        return;
    });
}

const server = http.createServer(requestListener);
server.listen(9999);
