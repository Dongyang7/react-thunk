var express = require('express'),
    app = express(),
    cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

app.get('/getdata', function (req, res) {
    var userdata = [
        {
            username: "Arungopan",
            location: "Piscataway",
            userid: "user1"
        },
        {
            username: "Nandakumar",
            location: "NJ",
            userid: "user2"
        },
        {
            username: "Sunil",
            location: "NY",
            userid: "user3"
        },
        {
            username: "Mohan",
            location: "PA",
            userid: "user4"
        },
        {
            username: "Naveen",
            location: "Edison",
            userid: "user5"
        }

    ];
    setTimeout(function() {
        res.send(userdata);
    }, 3000);
});

app.listen(8081, function() {
    console.log('Server running @ localhost:8081');
});