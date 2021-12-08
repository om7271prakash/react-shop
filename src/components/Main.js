import React from "react";
import ItemList from "./Block/ItemList";
import { items } from "../data";


import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>ITEMS LIST</h1>
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default Main;