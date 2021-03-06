const express = require('express');

const router = express.Router();
const MEMBERS = [
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573592260/parthene0n.jpg',
        name: 'Cody',
        username: 'Parthene0n',
        games: 'Call Of Duty (BLOPS 4, MW), Apex Legends',
        likes: 'Food, learning photography/film making, spending time with my wife',
        twitch: 'twitch.tv/parthene0n',
        twitter: 'twitter.com/parthene0n',
        ig: 'instagram.com/parthene0n',
        status: null
    },
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573588329/reasonlatency.jpg',
        name: 'Wilmer',
        username: 'ReasonLatency',
        games: 'Apex Legends, any other FPS/RPG',
        likes: 'Photography, Cars, Music, Technology',
        twitch: 'twitch.tv/reasonlatency',
        twitter: 'twitter.com/reasonlatency',
        ig: 'instagram.com/therealwilmer',
        status: null
    },
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573588329/nexticus.jpg',
        name: 'Ernest',
        username: 'Nexticus',
        games: 'Apex Legends, Call Of Duty, Anything',
        likes: 'Food, video games, working out, music, coding, spending time with my girl.',
        twitch: 'twitch.tv/nexticus',
        twitter: 'twitter.com/nexticus',
        ig: 'instagram.com/nexticus',
        status: null
    },
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573588329/leesarous.jpg',
        name: 'Lee',
        username: 'Leesarous',
        games: 'Overwatch, Apex Legends, Monster Hunter, Arcade Games',
        likes: 'I like anime (not a weeaboo), I like Kpop (not a koreaboo), I like cats (and dogs), and I like my friends. UwU',
        twitch: 'twitch.tv/leesarous',
        twitter: 'twitter.com/leesarous',
        ig: 'instagram.com/leesarous',
        status: null
    },
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573588329/yasskiwii.jpg',
        name: 'YassKiwii',
        username: 'yasskiwii',
        games: 'Mostly platformers and RPGs. Enjoys exploring different genres of games.',
        likes: 'Food, all of it. Playing guitar, video games, and watching anime/tv',
        twitch: 'twitch.tv/yasskiwii',
        twitter: 'twitter.com/yasskiwii',
        ig: 'instagram.com/yasskiwii',
        status: null
    },
    {
        img: 'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573588329/bxdwolf.jpg',
        name: 'Bad Wolf',
        username: 'bxdwolf',
        games: 'Apex Legends, League of Legends, Overwatch, CS: GO, Survival Games like Rust and DayZ.',
        likes: 'I like hot wings. Outdoors and big tiddies. Also skateboarding fast eating ass and respecting weman. Hiking is also cool. Fave food is thicc booty. And burgers... Thicc burgers.',
        twitch: 'twitch.tv/bxdwolf',
        twitter: 'twitter.com/bxdwolf1',
        ig: 'instagram.com/bxdwolf',
        status: null
    },
];

router.get('/', (req, res, next) => {
    console.log('Getting members data');
    res.json(MEMBERS);
});

router.get('/:name', (req, res, next) => {
    const memberName = req.params.name;
    const member = MEMBERS.find( m => {
        return m.username.toLowerCase() === memberName
    });

    if (!member){
        return res.status(404).json({
            message: 'Couldn\'t find member!'
        });
    }

    res.json({member});
});

module.exports = router;