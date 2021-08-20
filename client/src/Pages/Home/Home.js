import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Test from "../../Components/Test/Test";
import PageLayout from "../../Components/PageLayout/PageLayout";
import anime from 'animejs/lib/anime.es.js';

function Home() {
    useEffect(() => {
        anime({
            targets: 'div',
            // translateX: 250,
            rotate: '55turn',
            // backgroundColor: '#FFF',
            duration: 800
        });
    })

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
