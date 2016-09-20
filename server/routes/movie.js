var express = require('express');
var router = express.Router();
var movies = require('../models/movie');
/* GET home page. */
router.get('/get', function(req, res, next) {
  movies.find(function(err,docs){
      res.json(docs);
  });

});


var logger=function(req, res, next) {
  var movie=new movies();
  movies.find(function(err,m){
    if(err)
    res.send(err);
    else
      {
        console.log("coming upoda");
        console.log(movies);
      res.send(m);
    }
  });
}



router.put('/update/:id/:name', function(req, res,next) {
  movies.findOneAndUpdate({imdbid:req.params.id},{moviename:req.params.name}, function (err, movies) {
   if(err)
   res.send('err');
    else
       next();
  });
});


router.post('/add', function(req, res, next) {
  var movie=new movies();

  movie.moviename=req.body.Title;
  movie.year=req.body.Year;
  movie.source=req.body.Poster;
  movie.imdbid=req.body.imdbID;
  movie.save(function(err){
    if(err){
        res.send(err);
    }
    else {
       res.send({status:"Movie Saved Sucessfully"});
    }
  });
});


router.delete('/delete/:id', function(req, res,next) {
  console.log("delete called");
  console.log(req.params.id);
  movies.remove({imdbid:req.params.id},function(err){
    if(err){
        res.send(err);
    }
    else {
      next();
    }
  });

});

router.use(logger);
module.exports = router;
