import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FooterNoVizit } from "../../components/FooterNoVizit";
import { TracksContainer } from "../../const/TracksContainer/TracksContainer";
import { ChartsAlbumCards } from "../../components/cards/ChartsAlbum/ChartsAlbum";
import { CreatePlayBtn } from "./CreatePlaylist";
import './../../App.css';
import './MyMusic.css';
import './../../components/cards/ChartsAlbum/ChartsAlbum.css'
import './../../const/TracksContainer/TracksContainer.css'
import userLogo from './../../image/img/omi-omi.jpg';


export const MyMusic = () => {
    return (
        <div className="homePage">
            <div className="wrapperAside">
               <SideBarSection /> 
            </div>
            <div className="wrapperMain">
                <main className="MyMusicPage">
                    <SearchBar/>
                    <div className="mainMyMusic">
                        <div className="topSectionMyMusic">
                            <div className="userIcon">
                                <img src={userLogo} alt="aoishjdf" />
                            </div>
                            <div className="contentTop">
                                <h1>Моя музыка</h1>
                                <hr />
                                <h2>evGpi</h2>
                            </div>
                        </div>
                        <div className="bottomSectionMyMusic">
                            <section className="sectionMymusic">
                                <h3>Треки</h3>
                                <TracksContainer opacity="none" tracksCollection="tracks"/>
                            </section>
                            <section className="sectionMymusic">
                                <h3>Мои плейлисты</h3>
                                <CreatePlayBtn/>
                            </section>
                            <section className="sectionMymusic">
                                <h3>Мои альбомы</h3>
                                <ChartsAlbumCards/>
                            </section>
                            <section className="sectionMymusic">
                                <h3>Любимые артисты</h3>

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