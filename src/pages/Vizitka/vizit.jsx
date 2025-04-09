import { Header } from "../../navigation/header";
import { ZagViz } from "../../components/cards/HeroSection";
import { AboutCard } from "../../components/cards/About";
import { AdvantagesSection } from "./FeaturesSection";
import { CallToAction } from "./CallToAction";
import { Footer } from "../../components/Footer";
import './vizit.css'

export const VizitPage = () => {
    return (
        <div className="vizitPage">
            <div className="black">
                <Header/>
                <ZagViz />
                <AboutCard />
                <AdvantagesSection />
                <CallToAction />
                <Footer />
            </div>
       </div>
    )
}