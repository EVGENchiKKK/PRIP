import { GanreContainer } from '../PlaylistsContainer/GanreContainer';
import './GanrePlaylistCard.css';

export const GanreCard = () => {
    return (
        <div className='mainGanre'>
            <h2>Популярные жанры</h2>
            <section className="GanreCard">
                <GanreContainer collectionName="ganre" />
            </section>
        </div>
    )
}