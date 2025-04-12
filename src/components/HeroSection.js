'use client'
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {

    const scrollToNextSection = () => {
        const element = document.getElementById("features");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroText}>
                    <img src="/images/TailTracker_logo_white.png" alt="logo"/>
                    <p className={styles.motto}>Pro bezpečí a zdraví vašeho psa</p>
                    <p className={styles.motto}>– pro váš klid.</p>
                    {/*<p className={styles.infoText}>Nejchytřejší psí obojek na našem trhu. Zaměřen na bezpečí a zdraví psa - veškeré statistiky v kapse.</p>*/}
                    {/*<button className={styles.ctaButton}>Předobjednat</button>*/}
                </div>
            </div>

            <button
                className={styles.scrollArrow}
                onClick={scrollToNextSection}
                aria-label="Scroll to next section"
            >
                ↓
            </button>
        </section>
    );
}