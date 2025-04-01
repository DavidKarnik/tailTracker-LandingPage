import FeatureCard from "@/components/FeatureCard";
import styles from '../styles/Features.module.css';

const Features = () => {
    const features = [
        {
            icon: '📍',
            title: 'GPS poloha',
            description: 'Nikdy neztraťte svého psa s GPS sledováním v reálném čase.',
            bgColor: '#4CAF50',
        },
        {
            icon: '📱',
            title: 'Mobilní upozornění',
            description: 'Upozornění na aktivitu, útěk, nebo třeba neobvyklé chování.',
            bgColor: '#ff8732',
        },
        {
            icon: '🔍',
            title: 'Identifikace',
            description: 'Ryhlá identifikace psa kterýmkoliv chytrým mobilem. Stačí přiložit.',
            bgColor: '#4CAF50',
        },
        {
            icon: '💓',
            title: 'Zdraví',
            description: 'AI sleduje aktivitu, spánek, kroky, dýchání a další pro sestavení zdravotního profilu.',
            bgColor: '#ff8732',
        },
        {
            icon: '🏠',
            title: 'Virtuální plot',
            description: 'Vytvořte neviditelnou bezpečnou zónu a dostaňte upozornění při jejím překročení.',
            bgColor: '#4CAF50',
        },
        {
            icon: '🔔',
            title: 'Offline režim',
            description: 'Při ztrátě signálu se data neztratí. Po připojení se data znovu načtou.',
            bgColor: '#ff8732',
        },
    ];

    return (
        <section className={styles.featuresSection} id="features">
            <h2 className={styles.sectionTitle}>Funkce</h2>
            <div className={styles.featuresContainer}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;