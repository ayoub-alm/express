var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('path pour les commentaire ');
});

router.get('/:id', function(req, res, next) {
  res.json({
    "commentaire_id": req.params.id
  });
});


router.post('/add', function(req, res, next) {

  res.send('commentaire bien ajouté');
});


router.patch('/update/:id', function(req,res,next){

  res.send('mis a jour bien effectuer  commentaire id =  ' + req.params.id);
});

router.delete('/delet/:id', function(req,res,next){

  res.send('mis a jour bien effectuer commentaire id =  ' + req.params.id);
});
module.exports = router;
