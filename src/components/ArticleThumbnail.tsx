import stonksImage from '../assets/stonks.png'

function ArticleThumbnail(){
let article = {
   title: 'Titre de l\'article',
   content: 'Voici le contenu de l\'article.',
   image: {stonksImage},
   createdAt: new Date(),
   isPublished: false,
   likeCount: 0,
   categoryName: 'React',
 };

    return(
        <article className="article">
            <img src={stonksImage} alt="" />
            <p>{article.createdAt.toISOString()}</p>
            <h4>{article.title}</h4>
            <p>{article.content}</p>
        </article>
    );
}

export default ArticleThumbnail;