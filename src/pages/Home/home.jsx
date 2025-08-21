import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { ReklPremTwo } from "../../components/cards/NastroyCard/ReklPremTwo";
import { FourYouCard } from "../../components/cards/FourYouCard/FourYouCard";
import { NewRelizCard } from "../../components/cards/NewRelizCard/NewRelizCard";
import { NastroyCard } from "../../components/cards/NastroyCard/NastroyCard";
import { FooterNoVizit } from "../../components/FooterNoVizit";
import './../../App.css';
import './../MyMusic/MyMusic.css'

export const Home = () => {
    return (
        <div className="homePage">
            <div className="wrapperAside">
                <SideBarSection /> 
            </div>
            <div className="wrapperMain">
                <main className="MyMusicPage">
                    <SearchBar/>
                    <div className="mainMyMusic noMyMusic">
                        <div className="bottomSectionMyMusic">
                            <h1>Главная</h1>
                            <section className="sectionMymusic first">
                                <NewRelizCard/>
                            </section>
                            <section className="sectionMymusic create">
                                <h2>Специально для тебя</h2>
                                <FourYouCard/>
                            </section>
                            <section className="sectionMymusic">
                                <NastroyCard/>
                            </section>
                            <section>
                                {/* Здесь нет класса */}
                                <ReklPremTwo/>
                            </section>
                        </div>
                    </div>
                    <FooterNoVizit/>
                </main>
            </div>
        </div>
    )
}