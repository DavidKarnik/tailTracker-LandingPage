import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroText}>
                    <h1>Smart Dog Collar</h1>
                    <p className={styles.motto}>Smarter Care for Your Best Friend</p>
                    <h2>Track. Train. Protect.</h2>
                    <p>The next-gen smart collar for your dog’s safety and your peace of mind.</p>
                    <button className={styles.ctaButton}>Pre-Order Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="/images/dog-collar-hero.jpg" alt="Smart Dog Collar" />
                </div>
            </div>
        </section>
    );
}