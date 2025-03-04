import Menu from "./Menu";
import Navbar from "./Navbar";
import News from "./News";

type articleProp = {
    articles: any;
}

function Home(props: articleProp) {
    return (
        <div>
            <Navbar />
            <Menu />
            <News articles={props?.articles} />
        </div>
    );
}

export default Home;