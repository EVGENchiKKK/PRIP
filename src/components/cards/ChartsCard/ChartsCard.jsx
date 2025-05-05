import { TracksContainer } from "../../../const/TracksContainer/TracksContainer";
import './ChartsCard.css';

export const ChartsCard = () => {
    return (
        <div className="chartsCard">
            <h2>Чарт</h2>
            <div className="chartsTrack">
                <TracksContainer tracksCollection="tracks"/>
            </div>
        </div>
    )
}