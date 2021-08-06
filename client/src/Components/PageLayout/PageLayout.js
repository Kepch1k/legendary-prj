import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";

function PageLayout(props) {

    return (
        <>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </>
    );

}

export default PageLayout;
