var express = require('express');
var router = express.Router();
var users = require('../models/user');

/* GET users listing. */
router.get('/get', function(req, res, next) {
  users.find(function(err,docs){
      res.json(docs);
  });

});
router.get('/getone/:userid', function(req, res, next) {
  if(req.params.userid)
  {
  users.find({username:req.params.userid},function(err,docs){
      res.json(docs);
  });
}
});

router.post('/userinsert/:userid/:password', function(req, res) {
  var user=new users();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(err){
    if(err){
        res.send(err);
    }
    else {
       res.send("User Created Sucessfully");
    }
  });

});
router.put('/update/:userid/:pass', function(req, res) {
//   users.findOneAndUpdate({username:req.params.userid},{password:req.params.pass}, function (err, users) {
//     if(err)
//     res.send('err');
//     else
//   res.send('updated');
// });

users.findOne({username:req.params.userid},function(err,users)
{
  console.log('getting inside');
  console.log(req.params.pass);
if(err){
    res.send(err+" coming");
}
else {
  console.log('Coming in');
  var pass=req.params.pass;
  users.password=pass;
  users.save(function(err){
    if(err){
        res.send(err);
    }
    else {
        res.send('User updated sucessfully');
    }

  });


}


});

});
router.delete('/delete/:userid', function(req, res) {
  users.remove({username:req.params.userid},function(err){
    if(err){
        res.send(err);
    }
    else {
       res.send("User Deleted Sucessfully");
    }
  });

});


module.exports = router;
