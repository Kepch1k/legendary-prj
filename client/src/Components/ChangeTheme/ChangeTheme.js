import React from "react";
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import styles from './ChangeTheme.module.scss';
import {setTheme} from '../../Redux/Slices/SiteConfig';
import {THEME_LIST} from '../../Utils/constants';

function ChangeTheme(props) {

    const currentTheme = useSelector(state => state.siteConfig.theme);
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation()

    const changeTheme = (event) => {
        dispatch(setTheme(event.target.value))
    }

    const themeOptions = THEME_LIST.map(theme => {
        return <div key={theme}>
            <input type="radio" value={theme}
                   name="theme" checked={theme === currentTheme}/> {t(`theme.${theme}`)}
        </div>;
    })

    return (
        <div onChange={changeTheme} className={styles.main}>
            {themeOptions}
        </div>
    )

}

export default ChangeTheme;
