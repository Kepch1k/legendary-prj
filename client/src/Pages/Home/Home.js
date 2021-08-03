import React from "react";
import {Link} from "react-router-dom";
import Test from "../../Components/Test/Test";

function Home (props) {

    return (
        <>
            <Test />

            <Link to="/">
                Home
            </Link>

            <br />

            <Link to="/error">
                Error
            </Link>
        </>
    );

}

export default Home;
