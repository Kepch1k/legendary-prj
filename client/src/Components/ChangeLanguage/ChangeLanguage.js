import React from "react";
import {useTranslation} from 'react-i18next';
import styles from './ChangeLanguage.module.scss';

function ChangeLanguage(props) {

    const {t, i18n} = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div onChange={changeLanguage} className={styles.main}>
            <input type="radio" value="en" name="language" defaultChecked/> English
            <input type="radio" value="ru" name="language"/> Русский
        </div>
    )

}

export default ChangeLanguage;
