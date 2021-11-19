var express = require('express');
var port = process.env.PORT || 5000;

express()
    .get('/', (req, res) => res.send('Hello World'))
    .listen(port, () => console.log(`Listening on ${ port }`))