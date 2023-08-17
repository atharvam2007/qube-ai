// index.js

import React from "react";
import styles from './index.module.scss';
import Navbar from '../comps/Navbar';

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Navbar /> {/* Moved Navbar to the top */}
            <div className={styles.square}>
                <header className={styles.h1}>Qubes are not squares_</header>
                <p>This is the future</p>
            </div>
            <div className={styles.square}></div>
        </div>
    );
}

export default HomePage;
