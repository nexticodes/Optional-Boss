const express = require('express');
const axios = require('axios')

const router = express.Router();

const getTweets = async(numQ) => {
    let response = await axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tmoptionalboss&count=${numQ}`, {
        headers: {
            'Host': 'api.twitter.com',
            'Authorization': 'OAuth oauth_consumer_key="NIDpz1bJi7dNnoHxbeMrEvuJE",oauth_token="2965037396-0OnFzefjuU8LzN5mc3XXlSDWI3e29nk22kJpLpK",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1576019738",oauth_nonce="i5yMzVfM9dK",oauth_version="1.0",oauth_signature="388gn%2FNsUbkpVMc5GIH4x2qO4nw%3D"',
            'cache-control': 'no-cache',
        }
    });
    response.then((res) => res).catch((err) => err);
}

let accessToken = '';

const getToken = async() => {
    let response = await axios.post(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tmoptionalboss&count=${numQ}`, {
        headers: {
            'Host': 'api.twitter.com',
            'Authorization': 'Basic NIDpz1bJi7dNnoHxbeMrEvuJE:01JbU89ltGQXK229SE9kkxE40QgfvcoqiuPyGhet4r4237wGec',
        },
        body: 'grant_type=client_credentials'
    });
}


router.get('/:num', (req, res, next) => {
    let numQ = req.params.num
    let apiRes = getTweets(numQ);
    getToken();
    res.json(apiRes);
})

module.exports = router;