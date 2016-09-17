var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 var num1=parseInt(req.query.p1);
 var num2=parseInt(req.query.p2);
  var sum=num1+num2;
  res.send('The Sum is : '+sum);
});

router.put('/update', function(req, res, next) {
  res.send('put in express app invokes' );
});


router.post('/add', function(req, res, next) {
  console.log("coming in");
  console.log(req.body);
  res.send({'status':'saved'});
});


router.delete('/delete', function(req, res, next) {
  res.send('I AM WORKING FINE..!!' );
});


module.exports = router;
