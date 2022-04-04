var express = require('express');
var router = express.Router();
const User = require('../models/users_module')
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
    user = new User ();
    user.updateUsers(req,res);  
});

router.delete('/delete/:id', function(req,res,next){
      user = User();
      user.delete(req,res);
});



router.get('/:id', async (req, res,)=> {
  user = new User();
  user.getUser(req,res)
});
module.exports = router;
