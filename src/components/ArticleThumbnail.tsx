// import stonksImage from '../assets/stonks.png'

// interface ArticleThumbnailProp{
//     id: number;
//     title: string;
//     author: string;
//     content: string;
//     image: string;
//     createdAt: Date;
// }


// function ArticleThumbnail(props: any){
function ArticleThumbnail({ props }){

    return(
        <article className="article">
            <img src={props.image} alt="" />
            <p>{props.createdAt.toISOString()}</p>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </article>
    );
}

export default ArticleThumbnail;