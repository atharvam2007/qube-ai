import React from "react";
import styles from './HomePage.module.scss';
import Navbar from '../comps/Navbar';

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Navbar /> {/* Corrected the way you use the Navbar component */}
            <div className={styles.square}></div>
                <p>Terre mu me gobeer</p>
            <div className={styles.square}></div>
        </div>
    );
}

export default HomePage;
