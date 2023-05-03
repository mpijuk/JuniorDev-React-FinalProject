import unauthorized from '../../assets/unauthorized.png';
import styles from "../../styles/UnauthorizedUser.module.css";
import { Link } from 'react-router-dom';
const UnauthorizedUser = () => {     
    return(
        <div className={styles.unauthorizedContainer}>
            <p className={styles.pDescription}>You are not authorized to add new animals. Please check out this <Link to="/">link</Link> and learn how to become part of <span  className={styles.spanName}>AZILION</span> family.</p>
            <img 
                style={{ objectFit: "fill"}}
                width="100px"
                height="100px"
                alt="unauthorized"
                src={unauthorized}
            />
        </div>
    );
};

export default UnauthorizedUser;