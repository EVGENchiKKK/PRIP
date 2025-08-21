import searchLup from './../../image/icons/icons8-лупа-30.png';
import searchStrel from './../../image/icons/icons8-right-arrow-16.png';
import uvedImg from './../../image/icons/icons8-напоминания-50 1.png';
import strelVniz from './../../image/icons/icons8-стрелка-вниз-30 1.png';
import profileLogo from './../../image/img/omi-omi.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './searchBar.css';

export const SearchBarBrows = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <section className="search-section brows">
            <div className="search-container brows">
                <div className='search'>
                    <div className="search-icon">
                        <img src={searchLup} alt="Search"/>
                    </div>
                    <input type="text" placeholder="Направление, специальность и тд." className="search-input"/>
                    <div className="arrow-icon">
                        <img src={searchStrel} alt="Arrow"/>
                    </div>
                </div>
            </div>
            <div className={`profileBar ${openMenu ? 'activeProf' : ''}`}>
                <div className={`topProfile ${openMenu ? 'activTop' : ''}`}>
                    <button className={`btnUved ${openMenu ? 'activUved' : ''}`}>
                        <img src={uvedImg} alt="" />
                    </button>
                    <div className='profileBtn'>
                        <button className='btnProfileLogo' onClick={() => setOpenMenu(!openMenu)}>
                            <div className='groupProfile'>
                                <div className='nameAndLogo'>
                                    <p>evGpi</p>
                                    <img src={profileLogo} alt="" /> 
                                </div>
                                
                                <button className='strelLogo'><img src={strelVniz} alt="" /></button>
                            </div>
                            
                        </button>
                    </div>
                </div>
                <div className={`bottomProfile ${openMenu ? 'active' : ''}`}>
                    <nav className='menuDropDawn'>
                        <ul className='elDropDawn'>
                            <li className='dropDawnItem'><Link to="/profile">Профиль</Link></li>
                            <li className='dropDawnItem'>Уведомления</li>
                            <li className='dropDawnItem'>Связаться с нами</li>
                            <li className='dropDawnItem'>Выйти</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}