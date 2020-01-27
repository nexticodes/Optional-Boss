const express = require('express');

const Twit = require('twit');

const router = express.Router();

let T = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_SECRET
});

let tweetsRetweeted = [];

router.get('/retweet', (req, res, next) => {
    let date = new Date().toLocaleDateString();
    let params = {
        q: `@tmoptionalboss #OBLive`,
        result_type: 'recent',
        lang: 'en' 
    }

    T.get('search/tweets', params, (err, data) => {
        // if no errors
        if (data.statuses !== [] && !err){
            // Grab ID of tweet to be retweeted
            let id_str = (data.statuses[0]) ? data.statuses[0].id_str : null;
            
            if (id_str && !tweetsRetweeted.includes(id_str)){
                // Tell Twitter to rt.
                tweetsRetweeted.push(id_str);
                T.post('statuses/retweet/:id', {
                    id: id_str
                }, (err, res) => {
                    // RT success
                    // IF there's an error while rt
                    if (err) {
                        console.log(err.message);
                        return;
                    }

                    if (res) {
                        console.log(`Tweet ID ${id_str} has been retweeted.`)
                        return;
                    }
                });
            } else {
                console.log('No new tweets found');
            }
        } else {
            // else if unable to search tweet.
            console.log('Something went wrong while searching...')
        }
    });
});

module.exports = router;