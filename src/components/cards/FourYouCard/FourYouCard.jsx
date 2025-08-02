import StrelLevo from './../../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../../image/icons/iconStrelPravo.png';
import Logo from './../../../image/img/Иконка муз.дорожки.png';
import { PlaylistCollection } from '../PlaylistsContainer/PlaylistsContainer';
import './FourYouCard.css';

export const FourYouCard = () => {
    return (
        <section className="fourYouCard">
            <div className="headerFourYouCard">
                <img src={Logo} alt="" className='logoPlaylist' />
                <div className="sliderBtn">
                    <button className="slideBtn"><img src={StrelLevo} alt="" /></button>
                    <button className="slideBtn"><img src={StrelPravo} alt="" /></button>
                </div>
            </div>
            <div className="bodyFourYouCard">
                <PlaylistCollection collectionName="dailyMix" />
            </div>
        </section>
    )
}