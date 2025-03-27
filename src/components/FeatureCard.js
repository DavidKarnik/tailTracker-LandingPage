import styles from '../styles/FeatureCard.module.css';

export default function FeatureCard({ icon, title, description, bgColor }) {
    return (
        <div className={styles.featureCard}>
            <div className={styles.icon} style={{ backgroundColor: bgColor }}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}