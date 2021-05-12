var mongoose= require('mongoose');

var Config=require('./app.config');

exports.connect=() => {

    //url:  mongodb+srv://sai:<password>@ecommerce.obdec.mongodb.net/<dbname>?retryWrites=true&w=majority

    mongoose.connect(Config.config.MONGO_URL,{ useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
        if(err){
            console.log(err);
        }
        else
        {
            console.log("connected to database");
        }
    })
}