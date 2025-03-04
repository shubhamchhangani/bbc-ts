import { useEffect, useState } from "react";
import Home from "./Home";
import Signin from "./Signin";

function Main() {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    try {
      await fetch("https://newsapi.org/v2/everything?q=Apple&from=2025-02-04&sortBy=popularity&apiKey=4187e475baf44025a14d77cbf4de928f")
      .then(response => response.json())
      .then(data => setArticles(data));
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      {/*<Signin />*/}
      <Home articles={articles} />
    </div>
  );
}

export default Main;
