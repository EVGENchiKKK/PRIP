import { useState, useEffect } from 'react';
import { Carousel} from '../../const/Carousel/Carousel';
import PlayBtn from './../../image/icons/Play.png';
import LikeBtn from './../../image/icons/likeBtn.png';
import AddBtn from './../../image/icons/addBtn.png';
import AddQueueBtn from './../../image/icons/addQueueBtn.png';
import InstallBtn from './../../image/icons/installBtn.png';
import MoreBtn from './../../image/icons/moreBtn.png';
import './Snipet.css';

export const Snipets = ({tracksCollection}) => {
    const [snipets, setSnipets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSnipet = async () => {
            try {
                const response = await fetch('/tracks.json');
                const data = await response.json();
                setSnipets(data[tracksCollection] || []);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка:", error);
                setLoading(false);
            }
        };

        fetchSnipet();
    }, [tracksCollection]);

    if (loading) return <div>Загрузка...</div>;
    if (!snipets.length) return <div>Данные не найдены</div>;

    return (
        <div className="snipetsWrapper">
            <Carousel>
                {snipets.map(snipet => (
                    <div 
                        className='snipetCard' 
                        key={snipet.id}>
                        <div className='oblozhSnipet'>
                            <hr />
                            <div className='imgSnipet' style={{
                                backgroundImage: `url(${snipet.cover})`
                            }}></div>
                        </div>
                        <div className='contentSnip'>
                            <h2 className='nameSnip'>{snipet.title}</h2>
                            <div className='infoSnip'>
                                <h3 className='nameArtist'>{snipet.artist}</h3>
                                <p className='relizSnip'>{snipet.reliz}</p>
                                <span className='prodolzhitTrack'>{snipet.duration}</span>
                            </div>
                            <div className='interactionSnip'>
                                <div className='playBtnSnip play'>
                                    <button className='btnImg play'>
                                        <img src={PlayBtn} alt="" />
                                    </button>
                                </div>
                                <div className='playBtnSnip'>
                                    <button className='btnImg'>
                                        <img src={LikeBtn} alt="" />
                                    </button>
                                </div>
                                <div className='playBtnSnip'>
                                    <button className='btnImg add'>
                                        <img src={AddBtn} alt="" style={{width: '32px'}}/>
                                    </button>
                                </div>
                                <div className='playBtnSnip'>
                                    <button className='btnImg'>
                                        <img src={AddQueueBtn} alt="" />
                                    </button>
                                </div>
                                <div className='playBtnSnip'>
                                    <button className='btnImg'>
                                        <img src={InstallBtn} alt="" />
                                    </button>
                                </div>
                                <div className='playBtnSnip'>
                                    <button className='btnImg'>
                                        <img src={MoreBtn} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className='musicTrack'>
                                <p>0:00</p>
                                <hr />
                                <p>{snipet.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}