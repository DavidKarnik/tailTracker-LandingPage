import FeatureCard from "@/components/FeatureCard";
import styles from '../styles/Features.module.css';

const Features = () => {
    const features = [
        {
            icon: '📍',
            title: 'Real-Time GPS Tracking',
            description: 'Never lose your dog again with live location updates.',
            bgColor: '#4CAF50',
        },
        {
            icon: '📱',
            title: 'App Notifications',
            description: 'Alerts for activity, escape attempts, or low battery.',
            bgColor: '#ff8732',
        },
        {
            icon: '🏠',
            title: 'Virtual Fence',
            description: 'Create invisible boundaries and receive alerts when your dog crosses them.',
            bgColor: '#4CAF50',
        },
        {
            icon: '💓',
            title: 'Health Monitoring',
            description: 'Tracks heart rate, steps, and calories burned.',
            bgColor: '#ff8732',
        },
        {
            icon: '🔍',
            title: 'Easy Identification',
            description: 'Quickly identify your dog via QR code or by simply scanning with your mobile device.',
            bgColor: '#4CAF50',
        },
        {
            icon: '🔔',
            title: 'Bark Detection',
            description: 'Analyzes barking patterns for better training.',
            bgColor: '#ff8732',
        },
    ];

    return (
        <section className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresContainer}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;