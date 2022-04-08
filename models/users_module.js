const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()
 
function User (name, email, password) {
        this.name = name || null;
        this.email = email || null;
        this.password = password || null;
};
/*********** function for create user************** */
User.prototype.createUsers = async (req,res)=> {
  let nom = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  const user = await prisma.users.create({
    data: {
      nom: nom ,
      email: email,
      password: password
    },
});
res.status(200).json({
  user: user,
  status: 'success'
});
}
/******** function for get user from data base *********** */
User.prototype.getUser = async   (req,res) => {
  let user_id = req.params.id;
  const user = await prisma.users.findUnique({
   where: {
     id: parseInt(user_id),
   },
 }).catch((e) => {
    res.json({
      error: e.message
    })
 })
 .finally(async () => {
   await prisma.$disconnect()
 })  
 res.json(user);
};
/******* function for get All users ************************  */
User.prototype.getUsers = async function (req,res) {
  const users = await prisma.users.findMany();
  res.json(users)
};
/******** function for delete user ******************* */
User.prototype.deleteUser = async (req,res)=> {
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
User.prototype.updateUsers = async function (req,res) {
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


module.exports = User;