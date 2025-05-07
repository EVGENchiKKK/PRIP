import StrelLevo from './../../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../../image/icons/iconStrelPravo.png';
import { AlbumCards } from './AlbumCard';
import './ChartsAlbum.css';

export const ChartsAlbumCards = () => {
    return (
        <section className="chartsAlbumCards">
            <div className="headerChartsAlbum">
                <h2>Чарт альбомов</h2>
                <div className="sliderBtn">
                    <button className="slideBtn"><img src={StrelLevo} alt="" /></button>
                    <button className="slideBtn"><img src={StrelPravo} alt="" /></button>
                </div>
            </div>
            <div className='bodyChartsAlbum'>
                <AlbumCards albumCollection="albums"/>
            </div>
        </section>
    )
}