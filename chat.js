const express=require('express');

const chat = express();
const bodyParser = require('body-parser');
const loginRoute=require('./routes/login')
const messageRoute = require('./routes/message')

chat.use(bodyParser.urlencoded({ extended:false}));

chat.use(loginRoute)
chat.use(messageRoute)
chat.listen(7000)
