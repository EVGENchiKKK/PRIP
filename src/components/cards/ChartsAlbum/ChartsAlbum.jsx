import StrelLevo from './../../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../../image/icons/iconStrelPravo.png';
import './ChartsAlbum.css';
import { useState, useEffect, useRef } from 'react';

export const ChartsAlbumCards = ({nameGlav}) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/album.json');
                const data = await response.json();
                setAlbums(data.albums || []);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const scrollTo = (direction) => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        const scrollAmount = 300; // Настройте под ваш дизайн
        const currentScroll = container.scrollLeft;
        
        if (direction === 'prev') {
            container.scrollTo({
                left: currentScroll - scrollAmount,
                behavior: 'smooth'
            });
        } else {
            container.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const getNameGlav = () => {
        let secName = ""
        if (nameGlav === "MyAlbums") {
            secName = "Мои альбомы"
        } else if (nameGlav === "Charts") {
            secName = "Чарт альбомов"
        } else {
            secName += nameGlav
        }

        return secName
    }

    if (loading) return <div className="loading">Загрузка...</div>;
    if (!albums.length) return <div className="not-found">Подборка не найдена.</div>;

    return (
        <section className="chartsAlbumCards">
            <div className="headerChartsAlbum">
                <h2>{getNameGlav()}</h2>
                <div className="sliderBtn">
                    <button className="slideBtn" onClick={() => scrollTo('prev')}>
                        <img src={StrelLevo} alt="Предыдущий" />
                    </button>
                    <button className="slideBtn" onClick={() => scrollTo('next')}>
                        <img src={StrelPravo} alt="Следующий" />
                    </button>
                </div>
            </div>
            <div className='bodyChartsAlbum'>
                <div 
                    className="albumContainer"
                    ref={containerRef}
                >
                    {albums.map((album, index) => (
                        <div 
                            key={album.id} 
                            className="albumCard"
                            ref={el => itemRefs.current[index] = el}
                        >
                            <img src={album.albumImg} alt={album.title} />
                            <p>{album.title}</p>
                            <span>{album.artist}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}