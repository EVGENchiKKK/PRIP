import './brows.css';
import './../../App.css';
import { SideBarSection } from './../../navigation/headerAside/headerAside';
import { SearchBarBrows } from './../../components/searchBar/SearchBarBrows';
import searchLup from './../../image/icons/icons8-лупа-30.png';
import searchStrel from './../../image/icons/icons8-right-arrow-16.png'; 
import { GanreCard } from '../../components/cards/GanrePlaylistCard/GanrePlaylistCard';
import { MoodNeoCard } from '../../components/cards/GanrePlaylistCard/MoodNeoPlalists';
import { ChartsCard } from '../../components/cards/ChartsCard/ChartsCard';
import { ChartsAlbumCards } from '../../components/cards/ChartsAlbum/ChartsAlbum';
import { FooterNoVizit } from '../../components/FooterNoVizit';
import './../MyMusic/MyMusic.css'

export const BrowsPage = () => {
    return (
        <div className="homePage">
            <div className="wrapperAside">
               <SideBarSection /> 
            </div>
            <div className="wrapperMain">
                <main className="MyMusicPage">
                    <SearchBarBrows/>
                    <div className="mainMyMusic noMyMusic">
                        <div className="bottomSectionMyMusic">
                            <h1>Просмотр</h1>
                            <div className="search-container-brows">
                                <div className='search'>
                                    <div className="search-icon">
                                        <img src={searchLup} alt="Search"/>
                                    </div>
                                    <input type="text" placeholder="Направление, специальность и тд." className="search-input"/>
                                    <div className="arrow-icon">
                                        <img src={searchStrel} alt="Arrow"/>
                                    </div>
                                </div>
                            </div>
                            <section className="sectionMymusic">
                                <GanreCard/>
                            </section>
                            <section className="sectionMymusic create">
                                <MoodNeoCard />
                            </section>
                            <section className="sectionMymusic">
                                <ChartsCard/>
                            </section>
                            <section className="sectionMymusic">
                                <ChartsAlbumCards nameGlav="Charts"/>
                            </section>
                        </div>
                    </div>
                    <FooterNoVizit/>
                </main>
            </div>
        </div>
    )
}