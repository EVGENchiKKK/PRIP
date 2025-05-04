import searchLup from './../../image/icons/icons8-лупа-30.png';
import searchStrel from './../../image/icons/icons8-right-arrow-16.png';
import uvedImg from './../../image/icons/icons8-напоминания-50 1.png';
import strelVniz from './../../image/icons/icons8-стрелка-вниз-30 1.png';
import profileLogo from './../../image/img/omi-omi.jpg';
import './searchBar.css';

export const SearchBar = () => {
    return (
        <section className="search-section">
            <div className="search-container">
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
            <div className='profileBar'>
                <button className='btnUved'>
                    <img src={uvedImg} alt="" />
                </button>
                <div className='profileBtn'>
                    <a>evGpi</a>
                    <img src={profileLogo} alt="" />
                    <button className='btnProfileLogo'><img src={strelVniz} alt="" /></button>
                </div>
            </div>
        </section>
    )
}