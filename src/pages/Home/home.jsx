import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { ReklPremTwo } from "../../components/cards/NastroyCard/ReklPremTwo";
import { FourYouCard } from "../../components/cards/FourYouCard/FourYouCard";
import { NewRelizCard } from "../../components/cards/NewRelizCard/NewRelizCard";
import { NastroyCard } from "../../components/cards/NastroyCard/NastroyCard";
import { FooterNoVizit } from "../../components/FooterNoVizit";
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
                <NastroyCard/>
                <ReklPremTwo/>
                <FooterNoVizit />
            </main>
        </div>
    )
}