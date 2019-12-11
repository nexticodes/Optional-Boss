const express = require('express');
const axios = require('axios');
const Twit = require('twit');

const router = express.Router();

// const getTweets = async(numQ) => {
//     let response = await axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tmoptionalboss&count=${numQ}`, {
//         headers: {
//             'Authorization': `AuthStr`
//         }
//     });
//     response.then((res) => res).catch((err) => err);
// }

let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET
});

router.get('/:num', (req, res, next) => {
    T.get(`statuses/user_timeline.json?screen_name=tmoptionalboss&count=${router.params.num}`)
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