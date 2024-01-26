import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import CryptocurrrencySection from "../components/sections/CryptocurrencySection";

export default function Index() {
    return (
        <Layout>
            <HeroSection />
            <CryptocurrrencySection />
        </Layout>
    )
}