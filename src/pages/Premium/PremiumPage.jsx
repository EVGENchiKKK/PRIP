import { Header } from "../../navigation/header";
import { Footer } from "../../components/Footer";
import { ZagVizPrem } from "../../components/cards/HeroSectionPrem";
import { PremiumContainer } from "../../components/cards/PremiumContainer/PremiumContainer";

export const PremiumPage = () => {
    return (
        <div className="vizitPage">
            <Header/>
            <ZagVizPrem/>
            <h2 className="premText">
                Пользуйся Neofy без ограничений с премиумоми насладись музыкой по полной
            </h2>
            <PremiumContainer collectionPlan="premium"/>
            {/* <ZagViz />
            <AboutCard />
            <AdvantagesSection />
            <CallToAction /> */}
            <Footer />
        </div>
    )
}