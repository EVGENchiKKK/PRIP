import { GanreContainer } from '../PlaylistsContainer/GanreContainer';
import './GanrePlaylistCard.css';

export const MoodNeoCard = () => {
    return (
        <div className='mainGanre'>
            <h2>Настроение</h2>
            <section className="GanreCard">
                <GanreContainer collectionName="moodNeo" />
            </section>
        </div>
    )
}