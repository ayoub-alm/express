const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()
 
function User (name, email, password) {
        this.name = name || null;
        this.email = email || null;
        this.password = password || null;
     
};

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



User.prototype.getUser = async   (req,res) => {
  let user_id = req.params.id;
  const user = await prisma.users.findUnique({
   where: {
     id: parseInt(user_id),
   },
 }).catch((e) => {
   throw e
 })
 .finally(async () => {
   await prisma.$disconnect()
 })  
 res.json(user);
};

User.prototype.getUsers = async function (req,res) {
  const users = await prisma.users.findMany();
  res.json(users)
};

User.prototype.deleteUser = async (req,res)=> {
        // let user_id = req.params.id;
        const user = await prisma.users.findUnique({
         where: {
           id: 1,
         },
       }).catch((e) => {
         throw e
       })
       .finally(async () => {
         await prisma.$disconnect()
       })
       res.json(user)
}
User.prototype.updateUsers = function () {
    
};


module.exports = User;