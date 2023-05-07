import NewsForm from "./NewsForm";
import styles from "../../styles/NewsPopUp.module.css";

const NewsPopUp = ({isAdmin, refreshList, toggle}) => {
    return(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={() => toggle(false)}>
                    &times;
                </span>
                <NewsForm isAdmin={isAdmin} refreshList={refreshList} toggle={toggle} />
            </div>
        </div>
    );
};

export default NewsPopUp;