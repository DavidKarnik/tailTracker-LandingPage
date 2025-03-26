import styles from '../styles/ImageTextSection.module.css';

export default function ImageTextSection() {
    return (
        <section className={styles.section}>
            <div className={styles.slopedImage}>
                <img src="/images/dog-running.jpg" alt="Happy Dog" />
            </div>
            <div className={styles.textContent}>
                <h2>Designed for Adventure</h2>
                <p>Waterproof, durable, and lightweight—perfect for active dogs.</p>
                <ul>
                    <li>✅ 10-day battery life</li>
                    <li>✅ Adjustable sizing</li>
                    <li>✅ Chew-resistant material</li>
                </ul>
            </div>
        </section>
    );
}