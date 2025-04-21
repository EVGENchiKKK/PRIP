import { Header } from "../../navigation/header";
import { ZagViz } from "../../components/cards/HeroSection";
import { AboutCard } from "../../components/cards/About";
import { AdvantagesSection } from "./FeaturesSection";
import { CallToAction } from "../../components/cards/CallToAction";
import { Footer } from "../../components/Footer";
import './../../App.css';

export const VizitPage = () => {
    return (
        <div className="vizitPage">
            <Header/>
            <ZagViz />
            <AboutCard />
            <AdvantagesSection />
            <CallToAction />
            <Footer />
       </div>
    )
}