var mongoose=require('mongoose');
var schema=mongoose.Schema;


var user=new schema({
    username:String,
    password:String
});

module.exports=mongoose.model('user',user);
