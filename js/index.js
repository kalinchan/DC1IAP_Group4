const express = require('express');
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

const FormSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    company: String,
    country: String,
    email: String,
    context: String,
    updates: Boolean,
    contact: Boolean
});

async function sendData(req, res) {
    const Interest = mongoose.model('Interest', FormSchema);
    const document = new Interest({
        name: (req.body.name),
        occupation: (req.body.occupation),
        company: (req.body.company),
        country: (req.body.country),
        email: (req.body.email),
        context: (req.body.context),
        updates: (req.body.updates === 'true'),
        contact: (req.body.contact === 'true')
    });
    document.markModified('anything');
    document.save();
    res.json(document)
}

express()
    .get('/', (req, res) => res.send('Hello World'))
    .use(express.static("public"))
    .use(express.urlencoded({extended: true}))
    .get('/test', (req, res) => res.sendFile(__dirname + "/test.html"))
    .post('/post', async (req, res) => {
        sendData(req, res)
    })
    .listen(port, () => console.log(`Listening on ${ port }`));