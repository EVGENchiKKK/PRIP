import { useState, useEffect } from "react";
import './TracksContainer.css'

export const TracksContainer = ({ tracksCollection, opacity }) => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/tracks.json');
                const data = await response.json();
                setTracks(data[tracksCollection] || []);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [tracksCollection]);
    
    if (loading) return <div>Загрузка...</div>;
    if (!tracks.length) return <div>Подборка не найдена.</div>;

    const getTrackStyle = () => {
        return opacity === "none" ? { backgroundColor: 'transparent' } : {};
    }

    return (
        <div className="tracksContainer">
            {tracks.map((track, number) => (
                <div className="tracksCard" style={getTrackStyle()}>
                    <div className="trackLogo">
                        <span className="trackNumber">{number+1}</span>
                        <img src={track.cover} alt="" />
                    </div>
                    <div className="trackNameAvt">
                        <h3>{track.title}</h3>
                        <span>{track.artist}</span>
                    </div>
                    <span className="nameAlbum">{track.album}</span>
                    <span className="prodTrack">{track.duration}</span>
                </div>
            ))}
        </div>
    )
}