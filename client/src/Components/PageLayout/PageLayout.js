import React from "react";
import styles from './PageLayout.module.scss';
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";

function PageLayout(props) {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </div>
    );

}

export default PageLayout;
