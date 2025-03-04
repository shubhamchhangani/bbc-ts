type articleProp = {
    articles: any;
}

function News(props: articleProp) {
    //console.log(props.articles);
    return (
       <div className="grid md:grid-cols-3">
        <div className="my-4 mx-4">
            <h1 className="text-5xl font-semibold">{props?.articles?.articles[4].title}</h1>
            <p>{props?.articles?.articles[8]?.description}</p>
        </div>
        <img src={props?.articles?.articles[8]?.urlToImage} alt="news" className="h-96 my-4" />
        <div className="my-4 mx-4">
            <img src={props?.articles?.articles[9]?.urlToImage} alt="news" className="h-48 w-full object-cover" />
            <h1 className="text-base font-medium">{props?.articles?.articles[5]?.title}</h1>
            <p>{props?.articles?.articles[9]?.description}</p>
        </div>
       </div>
    )
}

export default News;