import { SearchBarSection } from "../../navigation/headerAside/headerAside";
import { CallToAction } from "../../components/cards/CallToAction";

export const Home = () => {
    return (
        <div className="homePage">
            <SearchBarSection />
            <CallToAction/>
        </div>
    )
}