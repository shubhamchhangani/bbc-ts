import data from '../data/business.json';

function Business() {
return (
<div>
    <div>
    <h1 className="text-5xl font-semibold text-red-800 ml-3">BUSINESS</h1>
    <hr className="h-px bg-black border-0 mx-3"/>
    </div>
<div className="grid md:grid-cols-3 gap-6 p-6">
            {data.articles
                .filter(article => article.urlToImage) // Filter articles with image URL
                .map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={article.urlToImage} alt="news" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h1 className="text-xl font-bold mb-2">{article.title}</h1>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                    </div>
                ))}
        </div>
</div>

    )
}

export default Business;