import styles from "../../styles/NewsList.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
import axios from "axios";
import { sortNews } from "../../utils";

const NewsList = ({news, refreshList, isAdmin}) => {

    async function deleteNews(newsID) {
      
      await axios.delete(`http://localhost:3001/news/${newsID}`);
      const result = await axios.get("http://localhost:3001/news");
      const sortedNews = sortNews([...result.data]);
      refreshList(sortedNews);
    };

    return(
      <div className={styles.newsListContainer}>
        {news?.map((notification) => (
          <div key={notification.id} className={styles.newsContainer}>
            <div className={styles.newsHeader} style={notification.important ? {backgroundColor:"#bb6a66"} : {backgroundColor:"#66bb6a"}}>
              <p className={styles.pTitle}>{notification.title}</p>
              <p className={styles.pDate}>{dayjs(notification.date).format("ddd, MMM D, YYYY h:mm A")}</p>
            </div>
            <div className={styles.newsBody}>
              <p className={styles.pText}>{notification.text}</p>
              {isAdmin ? 
                <DeleteIcon fontSize="large" className={styles.close} onClick={() => deleteNews(notification.id)}/> :
                null
              }
            </div>
          </div>               
        ))}
      </div>
    );
};

export default NewsList;