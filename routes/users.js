var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('route for utilisateurs');
});

router.get('/:id', function(req, res, next) {
  res.json({
    "user_id": req.params.id
  });
});


router.post('/add', function(req, res, next) {

  res.send('utilisateur bien ajouté');
});


router.patch('/update/:id', function(req,res,next){

  res.send('mis a jour des donneés de utlisateur est  bien effectuer ');
});

router.delete('/delet/:id', function(req,res,next){

  res.send(' l\'utlisateur est bien supprimé ');
});
module.exports = router;
