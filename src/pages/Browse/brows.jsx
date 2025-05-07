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

export const BrowsPage = () => {
    return (
        <div className="homePage">
            <SideBarSection />
            <main className="mainPlayPage">
                <SearchBarBrows/>
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
                <GanreCard/>
                <MoodNeoCard />
                <ChartsCard/>
                <ChartsAlbumCards/>
                <FooterNoVizit/>
            </main>
        </div>
    )
}