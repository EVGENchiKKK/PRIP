import React from "react";
import { Link } from "react-router-dom";
import Logo from './../../image/img/Иконка муз.дорожки.png';
import './headerAside.css';

export const SearchBarSection = () => {
  return (
    <aside className="bockPan">
        <nav className='navBock'>
            <a><img className='logo' src={Logo} alt=""/></a>
            <ul>
                <li><Link to="/home"><img src="" alt="" />Главная</Link></li>
                <li><Link to='/'>Просмотр</Link></li>
                <li><Link to='/'>Премиум</Link></li>
                <li><h2>Библеотека</h2></li>
                <li><Link to='/'>Моя музыка</Link></li>
                <li><Link to='/'>Открой для себя</Link></li>
            </ul>
            <div className="CreatePlaylist">
                <h2 className="ZagCreatePlaylist">
                    Плейлисты
                </h2>
                <p className="textCreatePlaylist">
                    У вас ещё нет <br />
                    своего плейлиста?
                </p>
            </div>
        </nav>
    </aside>
  );
};