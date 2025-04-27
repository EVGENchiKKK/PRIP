import Playlist1N from './../../../image/img/Playlist1N.jpg';
import Playlist2N from './../../../image/img/Playlist2N.jpg';
import Playlist3N from './../../../image/img/Playlist3N.jpg';
import Playlist4N from './../../../image/img/Playlist4N.jpg';
import StrelLevo from './../../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../../image/icons/iconStrelPravo.png';
import Logo from './../../../image/img/Иконка муз.дорожки.png';
import './../FourYouCard/FourYouCard.css';

export const NastroyCard = () => {
    return (
        <div className='main'>
            <h2>Подбери под своё настроение</h2>
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
                            <img src={Playlist1N} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Весёлый микс</h4>
                            <span>50</span>
                        </div>
                        <p>Микс, с которым вы точно взбодритесь</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist2N} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Микс под работу</h4>
                            <span>50</span>
                        </div>
                        <p>Идеально для работы и плодотворного труда.</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist3N} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Тренировка</h4>
                            <span>50</span>
                        </div>
                        <p>Покаряй новые вершины с нами и твоим миксом!</p>
                    </div>
                    <div className="playlistCard">
                        <div className='playlistImg'>
                            <div className="recktangleIcon small"></div>
                            <div className="recktangleIcon"></div>
                            <img src={Playlist4N} alt="" />
                        </div>
                        <div className="nameAndKol">
                            <h4>Немножко погрустить</h4>
                            <span>25</span>
                        </div>
                        <p>Всегда хочется побыть наедине с собой или со своим близким человеком.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}