import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import ImageTextSection from '../components/ImageTextSection';
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
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
            bgColor: '#FF6B00',
        },
        {
            icon: '💓',
            title: 'Health Monitoring',
            description: 'Tracks heart rate, steps, and calories burned.',
            bgColor: '#4CAF50',
        },
    ];

    return (
        <div>
            <Head>
                <title>Smart Dog Collar | Smarter Care for Your Best Friend</title>
            </Head>
            <HeroSection />
            <div className="features-container">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
            <ImageTextSection />
            <SubscribeForm />
        </div>
    );
}