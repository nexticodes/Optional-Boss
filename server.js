const express = require('express');
const bodyParser = require('body-parser');

const membersRoutes = require('./routes/members-route');

const app = express();

app.use('/api/members', membersRoutes);



app.listen(5000);