var app = require('express')();
var http = require('http').Server(app);
var ping = require('ping');
require('dotenv').config()

var cfg = {
    timeout: 10,
    // WARNING: -i 2 may not work in other platform like window
    // extra: ["-i 2"],
};

ping.sys.probe(process.env.SERVER_IP, (isAlive) => {
    console.log(isAlive);
}, cfg);

http.listen(process.env.APP_LISTEN || 4700, () => {
    console.log('listening on awe :'  +process.env.APP_LISTEN);
});