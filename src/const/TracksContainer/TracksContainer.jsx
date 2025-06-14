import { useState, useEffect } from "react";
import { TracksCard } from "./TracksCard";
import './TracksContainer.css'

export const TracksContainer = ({ tracksCollection }) => {
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

    return (
        <div className="tracksContainer">
            {tracks.map((track, index) => (
                <TracksCard key={track.id} track={track} number={index + 1} />
            ))}
            
        </div>
    )
}