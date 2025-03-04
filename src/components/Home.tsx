import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to BBC News</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {data.articles
            .filter(article => article.urlToImage) // Filter articles with image URL
            .slice(0, 6)
            .map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.urlToImage} alt="news" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <Link to="/news" className="text-blue-600 hover:underline">Read more</Link>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/news" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">View All News</Link>
        </div>
      </div>
    </div>
  );
}