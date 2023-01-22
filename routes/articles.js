var express = require('express');
var router = express.Router();
const Article = require('../models/ar')

/* GET users listing. */
router.get('/', function(req, res) {
    article = new Article();
    article.getAllArticle(req,res)
});

router.get('/:id', function(req, res, next) {
  res.json({
    "products_id": req.params.id
  });
});


router.post('/add', function(req, res) {
     article = new Article();
     article.createArticle(req, res);
});


router.patch('/update/:id', function(req,res,next){

  res.send('mis a jour bien effectuer ');
});

router.delete('/delet/:id', function(req,res,next){

  res.send('mis a jour bien effectuer ');
});
module.exports = router;
