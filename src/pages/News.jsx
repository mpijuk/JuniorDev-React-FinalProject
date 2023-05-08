import { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../components/newsComponents/NewsList";
import NewsPopUp from "../components/newsComponents/NewsPopUp";
import { sortNews } from "../utils";
import styles from "../styles/News.module.css";

const News = ({isAdmin}) => {
    const [news, setNews] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/news").
            then((result) => {
                const sortedNews = sortNews([...result.data]);
                setNews(sortedNews);
            });
    }, []);

    return(
        <div>
            <button onClick={() => setIsClicked(true)} className={styles.click}>Add news</button>
            {isClicked ? <NewsPopUp isAdmin={isAdmin} refreshList={setNews} toggle={setIsClicked}/> : null}
            <NewsList news={news}  refreshList={setNews} isAdmin={isAdmin}/>
        </div>
    );
};

export default News;