import React, {useEffect, useState} from "react";
import styles from './Header.module.scss';
import {useSelector} from "react-redux";

function Header() {

    const currentTheme = useSelector(state => state.siteConfig.theme);
    const [headerClassName, setHeaderClassName] = useState(styles.header);

    useEffect(() => {
        const themeClassName = `header__${currentTheme}`;
        setHeaderClassName(`${styles.header} ${styles[themeClassName]}`);
    }, [currentTheme])

    return (
        <header className={headerClassName}>
            Some Header
        </header>
    );

}

export default Header;
