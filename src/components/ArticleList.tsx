import ArticleThumbnail from "./ArticleThumbnail";

function ArticleList(){

    let ret = [];

    for(let i=0; i<10; i++){
        ret.push(<ArticleThumbnail />);
    }

    return(
    <section className="article-list">
        {ret}
    </section>
    );
}

export default ArticleList;