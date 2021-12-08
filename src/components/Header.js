import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.main_header}>
            <div className={styles.container}>
                <div className={styles.logo}>My App</div>
                <div className={styles.header_info}>
                    <button className={styles.button}>Cart 0</button>
                </div>
            </div>
        </div>
    );
}

export default Header;