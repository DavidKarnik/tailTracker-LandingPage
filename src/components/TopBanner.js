// components/TopBanner.js
"use client";
import styles from "../styles/TopBanner.module.css";

export default function TopBanner() {
    const scrollToSubscribe = () => {
        const element = document.getElementById("subscribe-form");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <div className={styles.banner}>
            <span className={styles.text}>Náš produkt je stále ve vývoji. Můžeme vás upozornit, až bude hotový!</span>
            <button className={styles.notifyButton} onClick={scrollToSubscribe}>
                Upozornit
            </button>
        </div>
    );
}
