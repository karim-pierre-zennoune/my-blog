import ArticleThumbnail from "./ArticleThumbnail";
import stonksImage from '../assets/stonks.png'

function ArticleList(){

  const articles = [
    { id: 1, title: "Découvrir React", author: "Jacques",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
    { id: 2, title: "Comprendre les props", author: "Jeanne",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
    { id: 3, title: "Afficher une liste avec map()", author: "Léa",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
    { id: 4, title: "Découvrir React", author: "Jacques",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
    { id: 5, title: "Comprendre les props", author: "Jeanne",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
    { id: 6, title: "Afficher une liste avec map()", author: "Léa",content: 'Voici le contenu de l\'article.' ,image: stonksImage, createdAt: new Date(),},
  ];




    return(
    <section className="article-list">
        {articles.map((elem) => (
            <ArticleThumbnail  props={elem}/>
        ))}
    </section>



    // <section className="article-list">
    //     {articles.map((elem) => (
    //         <ArticleThumbnail  key={elem.id} image={elem.image} title={elem.title} content={elem.content} createdAt={elem.createdAt } />
    //     ))}
    // </section>
    );
}

export default ArticleList;