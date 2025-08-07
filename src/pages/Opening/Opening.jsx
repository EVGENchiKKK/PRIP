import { FourYouCard } from "../../components/cards/FourYouCard/FourYouCard";
import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FavoriteArtist } from "../MyMusic/FavoriteArtists";
import { FooterNoVizit } from "../../components/FooterNoVizit";
import './../MyMusic/MyMusic.css'

export const OpeningPage = () => {
    return (
        <div className="homePage">
            <div className="wrapperAside">
                <SideBarSection /> 
            </div>
            <div className="wrapperMain">
                <main className="MyMusicPage">
                    <SearchBar/>
                    <div className="mainMyMusic">
                        <div className="topSectionMyMusic opening">
                            <div className="contentTop">
                                <h1>Мой поток</h1>
                                <div className="btnPlay">
                                    <div className="imgPlay"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bottomSectionMyMusic">
                            <section className="sectionMymusic">
                                <h2>Специально для тебя</h2>
                                <FourYouCard/>
                            </section>
                            <section className="sectionMymusic create">
                                <h2>Снипеты</h2>
                                <div className="wrapperCreate">
                                    
                                </div>
                            </section>
                            <section className="sectionMymusic">
                                <h2>Рекомендуемые исполнители</h2>
                                <FavoriteArtist/>
                            </section>
                            {/* <NewRelizCard />
                            <FourYouCard/>
                            <NastroyCard/>
                            <ReklPremTwo/> */}
                        </div>
                    </div>
                    
                    <FooterNoVizit />
                </main>
            </div>
            
        </div>
    )
}