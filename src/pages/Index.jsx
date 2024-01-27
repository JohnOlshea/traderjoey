import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import CryptocurrrencySection from "../components/sections/CryptocurrencySection";
import Footer from "../components/Footer";

export default function Index() {
    return (
        <Layout>
            <HeroSection />
            <CryptocurrrencySection />
            <Footer />
        </Layout>
    )
}