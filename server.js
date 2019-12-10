const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const membersRoutes = require('./routes/members-route');
const twitterRoutes = require('./routes/twitter-route');

const app = express();

app.use(cors());

app.use('/api/members', membersRoutes);
app.use('/api/twitter', twitterRoutes);



app.listen(5000);