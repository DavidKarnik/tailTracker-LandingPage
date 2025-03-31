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
                    <h1>TailTracker</h1>
                    <p className={styles.motto}>Pro bezpečí a zdraví vašeho psa – pro váš klid.</p>
                    <p>Nejchytřejší psí obojek na našem trhu. Zaměřen na bezpečí a zdraví psa - veškeré statistiky přímo
                        ve Vaší kapse.</p>
                    <button className={styles.ctaButton}>Předobjednat</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="/images/dogA.jpg" alt="Smart Dog Collar"/>
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