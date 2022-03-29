var express = require('express');
var router = express.Router();
const User = require('../modules/users_module')
const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient();
/* GET users listing. */



router.get('/all', function(req, res, next) {
    user= new User();
    user.getUsers(req,res);
});

router.post('/add', function(req, res) {

           user = new User ();
           user.createUsers(req,res);
});


router.patch('/update/:id', function(req,res,next){

  res.send('mis a jour des donneés de utlisateur est  bien effectuer ');
});

router.delete('/delet/:id', function(req,res,next){

  res.send(' l\'utlisateur est bien supprimé ');
});



router.get('/:id', async (req, res,)=> {
  user = new User();
  user.getUser(req,res)
});
module.exports = router;
