import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ArticlePage() {
    const [message, setMessage] = useState("Chargement en cours");
    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/articles?id=" + id)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setArticle(json[0])
            })
            .catch(() => setMessage("ERROR"));
    }, []);

    return (
        <article>
            <h1>{article.title}</h1>
            <img src={article.image} alt="" />
            <p>{article.createdAt} : <span> {article.likeCount} likes</span></p>
            <p>{article.content}</p>
        </article>



    );


}


export default ArticlePage;