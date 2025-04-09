import { Header } from "../../navigation/header";
import { ZagViz } from "../../components/cards/HeroSection";
import { AboutCard } from "../../components/cards/About";
import { FeaturesSection } from "./FeaturesSection";
import { CallToAction } from "./CallToAction";
import { Footer } from "../../components/Footer";
// import MuzDor from "../../image/img/Иконка муз.дорожки(без ритма).png"
import './vizit.css'

export const VizitPage = () => {
    return (
       <div>
            <Header/>
            <ZagViz />
            <AboutCard />
            <FeaturesSection />
            <CallToAction />
            <Footer />
       </div>
    )
}