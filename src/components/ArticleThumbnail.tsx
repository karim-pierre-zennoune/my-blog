// import stonksImage from '../assets/stonks.png'

import { useState } from "react";
import { Link } from "react-router-dom";

export interface ArticleThumbnailProp {
    id: number;
    title: string;
    author: string;
    content: string;
    image: any;
    createdAt: Date;
}

// ❤️
// 🤍



// function ArticleThumbnail(props: any){
function ArticleThumbnail({ article }: any) {

    // like btn  ❤️  🤍
    const [isLiked, setIsLiked] = useState(false);
    let likeIcon = isLiked ? "❤️" : "🤍";
    function handleLikeClic() {
        // setIsLiked(isLiked ? false : true);
        setIsLiked(!isLiked);
    }

    return (

        < Link to={`/articles/${article.id}`} >
            <article className="article">
                <img src={article.image} alt="" />
                <p>{article.createdAt}</p>
                <h4>{article.title}</h4>
                <p>{article.content}</p>
                <p onClick={handleLikeClic}>{likeIcon}</p>

            </article>

        </ Link >
    );
}

export default ArticleThumbnail;