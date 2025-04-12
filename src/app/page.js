import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ImageTextSection from "@/components/ImageTextSection";
import SubscribeForm from "@/components/SubscribeForm";
import Head from "next/head";
import TopBanner from "@/components/TopBanner";
import Product from "@/components/Product";

export default function Home() {
    return (
        <div>
            <Head>
                <title>TailTracker | Smarter Care for Your Best Friend</title>
            </Head>
            <TopBanner/>
            <HeroSection/>
            <Product/>
            <Features/>
            <ImageTextSection/>
            <SubscribeForm/>
        </div>
    );
}
