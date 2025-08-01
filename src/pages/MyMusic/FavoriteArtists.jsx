import { useEffect, useState } from "react";

export const FavoriteArtist = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch('/artist.json');
                const data = await response.json();
                setArtists(data.artists || []);
                setLoading(false)
            } catch (error) {
                console.error("Ошибка:", error);
                setLoading(false);
            }
        };
        
        fetchArtists();
    }, []);

    if (loading) return <div>Загрузка данных...</div>;
    if (!artists.length) return <div>Данные не найдены</div>;

    return (
        <div className="favoriteArtist">
            {artists.map(artist => (
                <div className="artistCard" key={artist.id}>
                    <div className="artistImg"></div>
                    <p className="artistName">{artist.nikName}</p>
                </div>
            ))}
        </div>
    )
}