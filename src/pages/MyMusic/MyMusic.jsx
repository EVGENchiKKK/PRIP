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
import { FavoriteArtist } from "./FavoriteArtists";


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
                            <div className="contentTop">
                                <h1>Моя музыка</h1>
                                <hr />
                                <h2>evGpi</h2>
                            </div>
                        </div>
                        <div className="bottomSectionMyMusic">
                            <section className="sectionMymusic">
                                <h2>Треки</h2>
                                <TracksContainer opacity="none" tracksCollection="tracks"/>
                            </section>
                            <section className="sectionMymusic create">
                                <h2>Мои плейлисты</h2>
                                <div className="wrapperCreate">
                                    <CreatePlayBtn/>
                                </div>
                            </section>
                            <section className="sectionMymusic">
                                <ChartsAlbumCards nameGlav="MyAlbums"/>
                            </section>
                            <section className="sectionMymusic">
                                <h2>Любимые артисты</h2>
                                <FavoriteArtist/>
                            </section>
                        </div>
                    </div>
                    <FooterNoVizit />
                </main>
            </div>
        </div>
    )
}