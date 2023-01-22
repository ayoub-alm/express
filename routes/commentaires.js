var express = require('express');
var router = express.Router();
let Commentaire = require('../models/commentaires_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("comments route")
});

router.get('/:id', function(req, res, next) {
  res.json({
    "commentaire_id": req.params.id
  });
});


router.post('/add', function(req, res, next) {
      let commentaire = new Commentaire();
      commentaire.addComment(req,res)
});


router.get('/update/:id', function(req,res,next){

  res.send('mis a jour bien effectuer  commentaire id =  ' + req.params.id);
});

router.delete('/delet/:id', function(req,res,next){

  res.send('mis a jour bien effectuer commentaire id =  ' + req.params.id);
});
module.exports = router;
