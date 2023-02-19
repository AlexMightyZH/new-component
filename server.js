const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 8000;
const responseDelay = 1000

var jsonParser = bodyParser.json()

app.post('/login', jsonParser, function (req, res) {
    setTimeout(() => {
        console.log(`Received Login Call!`)
    
        var username = req.body['username']
        var password = req.body['password']
        var response = {
            "code":"1",
        }
        if (username != null && username != '' && password != null && password != '') {
            response = {
                "code":"0",
                "token":"c3R1ZHlkb3RlOnN0dWR5ZG90ZTEyMw==",
                "userProfile": {
                    "username": req.body['username'],
                    "firstName": "John",
                    "lastName": "Doe"
                }
            }
        }
        res.send(response);
    }, responseDelay)
});

app.listen(port, function () {
    console.log(`SimpleSampleBE Running on port ${port}!`)
});