import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ImageTextSection from "@/components/ImageTextSection";
import SubscribeForm from "@/components/SubscribeForm";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>TailTracker | Smarter Care for Your Best Friend</title>
            </Head>
            <HeroSection/>
            <Features/>
            <ImageTextSection/>
            <SubscribeForm/>
        </div>
    );
}
