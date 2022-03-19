var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('route for articles');
});

router.get('/:id', function(req, res, next) {
  res.json({
    "products_id": req.params.id
  });
});


router.post('/add', function(req, res, next) {

  res.send('article bien ajouté');
});


router.patch('/update/:id', function(req,res,next){

  res.send('mis a jour bien effectuer ');
});

router.delete('/delet/:id', function(req,res,next){

  res.send('mis a jour bien effectuer ');
});
module.exports = router;
