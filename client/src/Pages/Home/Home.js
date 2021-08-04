import React from "react";
import {Link} from "react-router-dom";
import Test from "../../Components/Test/Test";
import PageLayout from "../../Components/PageLayout/PageLayout";

function Home() {

    return (
        <PageLayout>
            <Test/>

            <Link to="/">
                Home
            </Link>

            <br/>

            <Link to="/error">
                Error
            </Link>
        </PageLayout>
    );

}

export default Home;
