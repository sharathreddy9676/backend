var express = require('express');
var app= express();
var cors= require('cors');
var DB= require('./config/db.config');

var Config=require('./config/app.config');
var UserRouter= require('./routes/user.route');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

DB.connect();
app.use('/user',UserRouter);

app.listen(Config.config.PORT, () => {
    console.log("server started on port no  "+Config.config.PORT);
})