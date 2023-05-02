import { navigationItems } from "../utils";
import  { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const currentPath = useLocation().pathname;

    return (
        <nav className={styles.secondRow}>
            {navigationItems.map(({ label, path }) => (
                <Link to={path} key={path} className={styles.navLink}>
                    <div className={styles.navDiv} style={ currentPath == path ? {backgroundColor: "#66bb6a"} : { backgroundColor: "#333"}}>
                        {label}
                    </div>
                </Link> 
            ))}
        </nav>
    );
};

export default Navbar;
