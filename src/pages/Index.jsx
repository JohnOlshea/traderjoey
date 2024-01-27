import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import CryptocurrrencySection from "../components/sections/CryptocurrencySection";
import BuyAndTradeSection from "../../../../nefa/src/components/sections/BuyAndTradeSection";
import PartnerSection from "../components/sections/PartnerSection";
import CreditCardSection from "../components/sections/CreditCardSection";

export default function Index() {
    return (
        <Layout>
            <HeroSection />
            <CryptocurrrencySection />
            <BuyAndTradeSection />
            <PartnerSection />
            <CreditCardSection />
        </Layout>
    )
}