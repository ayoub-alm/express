const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()
 
function Commentaire ( email, contenu ,articles,articleId) { 
  this.email = email || null;
  this.contenu = contenu || null;
  this.articles = articles || null;
  this.articleId = articleId || null;
};
/*********** function for create commentaire ************** */
Commentaire.prototype.addComment = async (req,res)=> {
  let email = req.body.email;
  let contenu = req.body.contenu;
  let articles = req.body.articles;
  let articleId = req.body.articleId; 
  const comment = await prisma.Commentaire.create({
    data: {
      email: email,
      contenu: contenu,
      articleId:articleId
    },
});
res.status(200).json({
  comment: comment,
  status: 'success'
});
}
/******** function for get user from data base *********** */
Commentaire.prototype.getUser = async (req,res) => {
  let user_id = req.params.id;
  const user = await prisma.users.findUnique({
   where: {
     id: parseInt(user_id),
   },
 }).catch((e) => {
   throw e
 })
 .finally(async () => {
  res.json(user);
   await prisma.$disconnect()
 })  
 
};
/******* function for get All users ************************  */
Commentaire.prototype.getUsers = async function (req,res) {
  const users = await prisma.users.findMany();
  res.json(users)
};
/******** function for delete user ******************* */
Commentaire.prototype.deleteUser = async (req,res)=> {
      let user_id = req.params.id;
      let deletedUser = await prisma.users.delete({
       where:{id : parseInt(user_id)}
     });
     res.json({
       status: 'success',
       user :deletedUser
     })
}

/********** function for update user ******************* */
Commentaire.prototype.updateUsers = async function (req,res) {
  let user_id = req.params.id
  let nom = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  const updateUser = await prisma.users.update({
    where: {
      id:parseInt( user_id),
    },
    data: {
      nom: nom ,
      email: email,
      password: password
    },
  })
  res.status(200).json({
    status: 'success',
    user: updateUser
  })
};


module.exports = Commentaire;