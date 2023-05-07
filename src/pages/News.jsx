import { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../components/newsComponents/NewsList";
import NewsPopUp from "../components/newsComponents/NewsPopUp";

const News = ({isAdmin}) => {
    const [news, setNews] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/news").
            then((result) => {
                setNews(result.data);
            });
    }, []);

    console.log(news);
    return(
        <div>
            <button onClick={() => setIsClicked(true)}></button>
            {isClicked ? <NewsPopUp isAdmin={isAdmin} refreshList={setNews} toggle={setIsClicked}/> : null}
            <NewsList />
        </div>
    );
};

export default News;