import ArticleThumbnail from "./ArticleThumbnail";
import stonksImage from '../assets/stonks.png'
import { ArticleThumbnailProp } from "./ArticleThumbnail";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  image: string;
  likeCount: number;
  isPublished: boolean;
  categoryName: string;
  isLiked: boolean;
}





function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("Chargement en cour");


  useEffect(() => {

    fetch("http://localhost:3001/articles?q=" + searchTerm)
      .then((response) => response.json())
      .then((json) => setArticles(json))
      .catch(() => setMessage("ERROR"));

  }, [searchTerm]);

  function handleChange(event: any) {
    console.log(event?.target.value);
    setSearchTerm(event?.target.value);
  }


  return (<>
    <input type="text" onChange={handleChange} />
    <section className="article-list">


      {
        articles.length == 0 ? message :

          // filtered_articles.map((elem: ArticleThumbnailProp) => 
          articles.map((elem: ArticleThumbnailProp) =>
            <ArticleThumbnail
              key={elem.id}

              article={elem}
            />
          )}


    </section>
  </>


    // <section className="article-list">
    //     {articles.map((elem) => (
    //         <ArticleThumbnail  key={elem.id} image={elem.image} title={elem.title} content={elem.content} createdAt={elem.createdAt } />
    //     ))}
    // </section>
  );
}

export default ArticleList;