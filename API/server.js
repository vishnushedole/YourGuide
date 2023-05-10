const express = require('express')
const app = express();
const FeedRouter = require('./Router/FeedRouter.js')
const bodyParser = require('body-parser')
const controller = require('./controller/FeedController.js');
const exp = require('constants');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
})
app.use(bodyParser.json())
app.use('/',FeedRouter)

app.listen(8080);