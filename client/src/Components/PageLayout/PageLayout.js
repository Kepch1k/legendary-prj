import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

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
