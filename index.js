var express = require('express');
var port = 3000;

express()
    .get('/', (req, res) => res.send('Hello World'))
    .listen(port, () => console.log(`Listening on ${ port }`))