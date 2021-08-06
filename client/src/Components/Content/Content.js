import React from "react";
import styles from './Content.module.scss';

function Content(props) {

    return (
        <main className={styles.main}>
            {props.children}
        </main>
    );

}

export default Content;
