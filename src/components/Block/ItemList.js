import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import styles from "./ItemList.module.css";

const ItemList = ({items}) => {

    return (
        <Fragment>
            {items.map( item => {
                return (
                    <div className={styles.wrapper} key={item.id}>
                        <div className={styles.item_info}>
                            <div className={styles.item_name}>{item.name}</div>
                            <div className={styles.item_price}>${item.price}</div>
                        </div>
                        <div className={styles.action}>
                            <div className={styles.item_quantity}>
                                <label>Qantity : </label>
                                <input type="number" value="1" min="1" max={item.max_val} step="1"/>
                                
                            </div>
                            <div className={styles.add_to_cart}>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Fragment>
        
    );
}

export default ItemList;