export default function Article(props){
    console.log(props.art) 
    const a = props.art.urlToImage ? props.art.urlToImage :  "/altimg.png";
   return(
        <div className="article">
            <div className="imag">
                <img src={a} className="imageee"></img>
            </div>
            <h2>{props.art.title}</h2>
            <p>{props.art.content.slice(0,100)+"...."}</p>
            <a href={props.art.url}> Read more</a>
            <div className="ap">
                <p>{props.art.author}</p>
                <p>{props.art.source.name}</p>
            </div>
        </div>
    )
}