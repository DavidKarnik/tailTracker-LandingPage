import styles from '../styles/ImageTextSection.module.css';

export default function ImageTextSection() {
    return (
        <section className={styles.section}>
            <div className={styles.slopedImage}>
                {/*<img src="/images/dogB.jpg" alt="Happy Dog"/>*/}
                <img src="/images/TailTracker_GoldenRetriever.png" alt="Happy Dog"/>
            </div>
            <div className={styles.textContent}>
                <h2>Dobrodružství má v krvi</h2>
                {/*<p>Navržen na míru pro čtyřnohé parťáky.</p>*/}
                <ul>
                    <li>+ Vodotěsný a odolný - perfektní pro aktivní psy</li>
                    <li>+ Zdravotní profil pomocí umělé inteligence</li>
                    <li>+ Dosah signálu po celém světě</li>
                    <li>+ Pro všechny velikosti obojků</li>
                    <li>+ Predikce nemocí pomocí AI</li>
                    <li>+ Dlouhá výdrž baterie</li>
                    <li>+ Hlídá 24 hodin denně</li>
                </ul>
            </div>
        </section>
    );
}