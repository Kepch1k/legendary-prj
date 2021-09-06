import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import ChangeLanguage from "../../Components/ChangeLanguage";
import Test from "../../Components/Test/Test";
import PageLayout from "../../Components/PageLayout/PageLayout";
import {useTranslation} from 'react-i18next';

function Home() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        anime({
            targets: 'div',
            // translateX: 250,
            rotate: '5turn',
            duration: 800
        });
    })

    return (
        <PageLayout>
            <Test/>

            <ChangeLanguage/>

            <Link to="/">
                Home
            </Link>

            <br/>

            <Link to="/error">
                Error
            </Link>

            <br/>

            {t('hello.label')}
        </PageLayout>
    );

}

export default Home;
