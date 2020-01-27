const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')})

const membersRoutes = require('./routes/members-route');
const twitterRoutes = require('./routes/twitter-route');
const emailRoutes = require('./routes/email-route');
const botRoutes = require('./routes/bot-route');

const app = express();
app.use('/Optional-Boss/', express.static(path.join('client/build')));

app.use(cors());


app.use('/api/members', membersRoutes);
app.use('/api/twitter', twitterRoutes);
app.use('/api/bot', botRoutes);
app.use('/email', emailRoutes);

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})


app.listen(process.env.PORT || 5000);