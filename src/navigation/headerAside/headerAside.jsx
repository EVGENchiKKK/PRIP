import React from "react";
import { Link } from "react-router-dom";
import Logo from './../../image/img/Иконка муз.дорожки.png';
import './headerAside.css';
import homeOff from './../../image/icons/homeOff.png';
import browseOff from './../../image/icons/browseOff.png';
import premiumOff from './../../image/icons/premiunOff.png';
import myMusicOff from './../../image/icons/MyMusicOff.png';
import discoweryOff from './../../image/icons/DiscoveryOff.png';
import createPlaylist from './../../image/icons/CreatePlaylist.png';
import homeOn from './../../image/icons/homeOn.png';

export const SideBarSection = () => {
  return (
    <aside className="bockPan">
        <nav className='navBock'>
            <a><img className='logo' src={Logo} alt=""/></a>
            <ul>
                <li>
                    <Link className="navLi" to="/home">
                        <div className="logoLi">
                            {/* <img className="logoOff" src={homeOff} alt="" />
                            <img className="logoOn" src={homeOn} alt="" /> */}
                        </div>
                        <p>Главная</p>
                    </Link>
                </li>
                <li><Link className="navLi" to='/brows'><img src={browseOff} alt="" /><p>Просмотр</p></Link></li>
                <li><Link className="navLi" to='/premium'><img src={premiumOff} alt="" /><p>Премиум</p></Link></li>
                <h2 className="zagBib">Библеотека</h2>
                <li><Link className="navLi" to='/'><img src={myMusicOff} alt="" />Моя музыка</Link></li>
                <li><Link className="navLi" to='/'><img src={discoweryOff} alt="" />Открой для себя</Link></li>
            </ul>
            <div className="CreatePlaylist">
                <h2 className="zagBib play">
                    Плейлисты
                </h2>
                <p className="textCreatePlaylist">
                    У вас ещё нет <br />
                    своего плейлиста?
                </p>
                <button className="btnCreatePlaylist">
                    <img src={createPlaylist} alt="" />
                    <p>Создать плейлист</p>
                </button>
            </div>
        </nav>
    </aside>
  );
};