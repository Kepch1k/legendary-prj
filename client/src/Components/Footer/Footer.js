import React, {useState} from "react";
import styles from './Footer.module.scss';

function Footer() {

    const [state, setState] = useState({
        'companyName': 'Test',
        'startDate': 2021,
        'endDate': +(new Date()).getFullYear(),
        'getDate': function () {
            return this.endDate !== this.startDate ? `${this.startDate} - ${this.endDate}` : this.startDate
        },
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__company}>©{state.companyName} {state.getDate()}</div>
            <div>second</div>
        </footer>
    );

}

export default Footer;
