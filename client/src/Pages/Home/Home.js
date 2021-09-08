import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Container} from '@material-ui/core';
import anime from 'animejs/lib/anime.es.js';
import ChangeLanguage from "../../Components/ChangeLanguage";
import ChangeTheme from "../../Components/ChangeTheme";
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

            <Container style={{background: 'white'}}>
                <ChangeTheme/>
            </Container>

            <Link to="/">
                Home
            </Link>

            <br/>

            <Link to="/error">
                Error
            </Link>

            <br/>

            {t('hello.label')}

            <Button color="primary">Hello World</Button>
        </PageLayout>
    );

}

export default Home;
