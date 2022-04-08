const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()
 
function Article (titre, contenu,image, authorId) {
       this.titre = titre || null;
       this.contenu = contenu || null;
       this.image = image;
       this.authorId = authorId || null;
};
/*********** function for create user************** */
Article.prototype.createArticle = async (req,res)=> {
  let titre = req.body.titre;
  let contenu = req.body.contenu;
  let image = req.body.image;
  let authorId = req.body.authorId;
  const article = await prisma.articles.create({
    data: {
     titre: titre ,
     contenu: contenu,
     image: image,
     authorId: authorId
    },
});
res.status(201).json({
  article: article,
  status: 'success'
});
}

Article.prototype.deleteArticle = async (req,res)=> {
     let articleId = req.params.article;
     let deletedArticle =  await prisma.articles.delete({
       where: {id: parseInt(articleId)}
     }).catch((e)=>{
          res.json({error: e.message})
     }).finally()
}

Article.prototype.getAllArticle = async (req,res)=>{
    let articles = await prisma.articles.findMany().catch((e) => {
        res.json(
         { error: e.message}
        )
     })
     .finally(async () => {
       await prisma.$disconnect()
     })  
     res.json(articles);
    };

module.exports = Article;