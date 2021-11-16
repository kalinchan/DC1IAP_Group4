var express = require('express');
var port = 5000;

express()
    .get('/', (req, res) => res.send('Hello World'))
    .listen(port, () => console.log(`Listening on ${ port }`))