import { useState, useEffect } from "react";

export const AlbumCards = ({ albumCollection }) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/album.json');
                const data = await response.json();
                setAlbums(data[albumCollection] || []);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [albumCollection]);
    
    if (loading) return <div>Загрузка...</div>;
    if (!albums.length) return <div>Подборка не найдена.</div>;

    return (
        <div className="albumContainer">
            {albums.map(album => (
                <div className="albumCard">
                    <img src={album.albumImg} alt="" />
                    <p>{album.title}</p>
                    <span>{album.artist}</span>
                </div>
            ))}
        </div>
    )
}