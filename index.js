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
    othercontext: String,
    updates: Boolean,
    contact: Boolean,
    phone: Number
});
const Interest = mongoose.model('Interest', FormSchema);

async function sendData(req, res) {
    const document = new Interest({
        name: (req.body.name),
        occupation: (req.body.occupation),
        company: (req.body.company),
        country: (req.body.country),
        email: (req.body.email),
        context: (req.body.context),
        othercontext: (req.body.othercontext),
        updates: (req.body.updates === 'true'),
        contact: (req.body.contact === 'true'),
        phone: (req.body.phone)
    });
    document.markModified('anything');
    document.save();
    res.sendFile(__dirname + "/index.html")
}

async function getDataCount(){
    Interest.count({}, function (err, count){
        return (count + " people have registered their interest in Drone Drop!")
    })
}
express()
    .use(express.static(__dirname))
    .get('/', (req, res) => {
        req.addParameter("interest", getDataCount());
        res.render(__dirname + "/index.html", {interest: getDataCount()})
    })
    .use("/css",express.static("css"))
    .use("/res",express.static("res"))
    .use("/js",express.static("js"))
    .use(express.urlencoded({extended: true}))
    .post('/addData', async (req, res) => {
        await sendData(req, res)
    })
    .get('/contact', (req, res) => res.sendFile(__dirname + "/contact.html"))
    .get('/register', (req, res) => res.sendFile(__dirname + "/register.html"))
    .get('/amount', () => getDataCount())
    .listen(port, () => console.log(`Listening on ${ port }`));