const express = require('express');

const Twit = require('twit');

const router = express.Router();

let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET
});

router.get('/tweets', (req, res, next) => {
    T.get(`statuses/user_timeline.json?screen_name=tmoptionalboss&count=10`)
        .catch((error) => {
            res.json({
                message: 'Something wrong happened',
                error
            })
        }).then((data) => {
            res.json(data);
        });
});

module.exports = router;