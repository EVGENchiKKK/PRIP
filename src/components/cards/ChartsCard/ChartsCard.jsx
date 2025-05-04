import { TracksContainer } from "../../../const/TracksContainer/TracksContainer";

export const ChartsCard = () => {
    return (
        <div className="chartsCard">
            <h2>Чарт</h2>
            <div className="chartsTrack">
                <TracksContainer tracksCollection="charts"/>
            </div>
        </div>
    )
}