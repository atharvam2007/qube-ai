// index.js

import React, { useEffect, useState } from "react";
import styles from './index.module.scss';
import Navbar from '../comps/Navbar';

const HomePage = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [animationText, setAnimationText] = useState(""); // Initialize animationText
    const text = "Qubes are not squares";

    useEffect(() => {
        if (startAnimation) {
            const animationInterval = setInterval(() => {
                const currentTextLength = Math.min(animationText.length + 1, text.length);
                setAnimationText(text.substring(0, currentTextLength));

                if (currentTextLength === text.length) {
                    clearInterval(animationInterval);
                }
            }, 55); // Delay between each letter in milliseconds

            return () => clearInterval(animationInterval);
        }
    }, [startAnimation, animationText, text]);

    useEffect(() => {
        // Start the animation after a delay
        setTimeout(() => {
            setStartAnimation(true);
        }, 1000); // Delay in milliseconds
    }, []);

    return (
        <div className={styles.homepage}>
            <Navbar />
            <div className={styles.square}>
                <header className={styles.h1}>
                    {animationText}
                    <span className={styles.blinkingUnderscore}>_</span>
                </header>
                <p>This is the future</p>
            </div>
            <div className={styles.square}></div>
        </div>
    );
}

export default HomePage;
