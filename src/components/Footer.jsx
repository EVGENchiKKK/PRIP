import React from 'react';
import vkLogo from './../image/icons/icons8-vk-144.png';
import tgLogo from './../image/icons/icons8-телеграмма-app-96.png';
import youTubeLogo from './../image/icons/icons8-youtube-96.png';
import navTopIcon from './../image/icons/navTop.png';
import Logo from './../image/img/Иконка муз.дорожки.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
        <div className="topSection">
          <nav className='navFoot'>
              <ul>
                  <li><a href='#'>Главная</a></li>
                  <li><a href='#'>Просмотр</a></li>
                  <li><a href='#'>Моя музыка</a></li>
                  <li><a href='#'>Открой для себя</a></li>
                  <li><a href='#'>Премиум</a></li>
                  <li><a href='#'>Связаться с нами</a></li>
              </ul>
              
          </nav>
          <div className="socSeti">
            <a><img className='socLogo' src={vkLogo} alt=""/></a>
            <hr />
            <a><img className='socLogo' src={tgLogo} alt=""/></a>
            <hr />
            <a><img className='socLogo' src={youTubeLogo} alt=""/></a>
          </div>
        </div>
        <div className="topSection bottom">
          <div className='logoFot'>
            <a><img className='logo' src={Logo} alt=""/></a>
            <span>© 2025 Neofy. Все права защищены.</span>
          </div>
          <a className='navTopWrapper' href="#"><img className='navTopIcon' src={navTopIcon} alt="" /></a>
        </div>
    </footer>
  );
}