import Playlist1 from './../../../image/img/Playlist1.png';
import Playlist2 from './../../../image/img/Playlist2.png';
import Playlist3 from './../../../image/img/Playlist3.jpg';
import Playlist4 from './../../../image/img/Playlist4.jpg';
import StrelLevo from './../../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../../image/icons/iconStrelPravo.png';
import Logo from './../../../image/img/Иконка муз.дорожки.png';
import './FourYouCard.css';

export const FourYouCard = () => {
    return (
        <div className='main'>
            <h2>Специяально для тебя</h2>
            <section className="fourYouCard">
                <div className="headerFourYouCard">
                    <img src={Logo} alt="" className='logoPlaylist' />
                    <div className="sliderBtn">
                        <button className="slideBtn"><img src={StrelLevo} alt="" /></button>
                        <button className="slideBtn"><img src={StrelPravo} alt="" /></button>
                    </div>
                </div>
                <div className="bodyFourYouCard">
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist1} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Еженедельный микс</h4>
                            <span>50</span>
                        </div>
                        <p>Ваш еженедельный микстейп свежей музыки.</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist2} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Ежедневный микс 1</h4>
                            <span>50</span>
                        </div>
                        <p>Ваш ежедневный микстейп свежей музыки.</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist3} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Ежедневный микс 2</h4>
                            <span>50</span>
                        </div>
                        <p>Ваш ежедневный микстейп свежей музыки.</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist4} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Ежедневный микс 3</h4>
                            <span>50</span>
                        </div>
                        <p>Ваш ежедневный микстейп свежей музыки.</p>
                    </div>
                </div>
            </section>
        </div>
        
    )
}