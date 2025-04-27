import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { CallToAction } from "../../components/cards/CallToAction";
import { FourYouCard } from "../../components/cards/FourYouCard/FourYouCard";
import { NewRelizCard } from "../../components/cards/NewRelizCard/NewRelizCard";
import './../../App.css';

export const Home = () => {
    return (
        <div className="homePage">
            <SideBarSection />
            <main className="mainPlayPage">
                <SearchBar/>
                <h1>Главная</h1>
                <NewRelizCard />
                <FourYouCard/>
                <CallToAction/>
            </main>
        </div>
    )
}