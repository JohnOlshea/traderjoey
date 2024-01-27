import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import CryptocurrrencySection from "../components/sections/CryptocurrencySection";
import Footer from "../components/Footer";
import BuyAndTradeSection from "../../../../nefa/src/components/sections/BuyAndTradeSection";
import PartnerSection from "../components/sections/PartnerSection";

export default function Index() {
    return (
        <Layout>
            <HeroSection />
            <CryptocurrrencySection />
            <BuyAndTradeSection />
            <PartnerSection />
            <Footer />
        </Layout>
    )
}