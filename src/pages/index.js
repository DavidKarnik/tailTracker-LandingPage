import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ImageTextSection from '../components/ImageTextSection';
import SubscribeForm from "@/components/SubscribeForm";
import Features from "@/components/Features";

export default function Home() {
    return (
        <div>
            <Head>
                <title>TailTracker | Smarter Care for Your Best Friend</title>
            </Head>
            <HeroSection />
            <Features />
            <ImageTextSection />
            <SubscribeForm />
        </div>
    );
}