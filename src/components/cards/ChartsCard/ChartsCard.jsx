import { TracksContainer } from "../../../const/TracksContainer/TracksContainer";
import strelVniz from './../../../image/icons/icons8-стрелка-вниз-30 1.png';
import './ChartsCard.css';

export const ChartsCard = () => {
    return (
        <div className="chartsCard">
            <h2>Чарт</h2>
            <div className="chartsTrack">
                <TracksContainer tracksCollection="tracks"/>
            </div>
            <div className="btnFullChart">
                <span>Полный чарт 100 треков</span>
                <img src={strelVniz} alt="" />
                <button className="btnCharts">
                    Открыть
                </button>
            </div>
        </div>
    )
}