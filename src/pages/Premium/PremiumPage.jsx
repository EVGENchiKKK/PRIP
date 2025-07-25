import { Header } from "../../navigation/header";
import { Footer } from "../../components/Footer";
import { ZagVizPrem } from "../../components/cards/HeroSectionPrem";
import { PremiumContainer } from "../../components/cards/PremiumContainer/PremiumContainer";
import { PreimushCard } from "./PreimushCard";

export const PremiumPage = () => {
    return (
        <div className="vizitPage">
            <Header/>
            <ZagVizPrem/>
            <h2 className="premText">
                Пользуйся Neofy без ограничений с премиумоми насладись музыкой по полной
            </h2>
            <PremiumContainer collectionPlan="premium"/>
            <PreimushCard/>
            {/* <ZagViz />
            <AboutCard />
            <AdvantagesSection />
            <CallToAction /> */}
            <Footer />
        </div>
    )
}