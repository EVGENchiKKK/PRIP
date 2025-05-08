import { Header } from "../../navigation/header";
import { Footer } from "../../components/Footer";
import { ZagViz } from "../../components/cards/HeroSection";

export const PremiumPage = () => {
    return (
        <div className="vizitPage">
            <Header/>
            <ZagViz/>
            {/* <ZagViz />
            <AboutCard />
            <AdvantagesSection />
            <CallToAction /> */}
            <Footer />
        </div>
    )
}