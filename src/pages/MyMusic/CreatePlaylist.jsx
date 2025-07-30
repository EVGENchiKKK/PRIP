import createPlaylist from './../../image/icons/CreatePlaylist.png';
import './MyMusic.css';

export const CreatePlayBtn = () => {
    return (
        <div className="btnCreatePlay">
            <div className="imgCreate">
                <img src={createPlaylist} alt="Создать плейлист" />
            </div>
            <p>Новый плейлист</p>
        </div>
    )
}