import React, { useState, useEffect } from 'react';
import './PlaylistsContainer.css';

export const PlaylistCollection = ({ collectionName }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/playlists.json');
        const data = await response.json();
        setPlaylists(data[collectionName] || []);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  if (loading) return <div>Загрузка...</div>;
  if (!playlists.length) return <div>Подборка не найдена</div>;

  return (
    <div className="playlists-container">
      <div className="playlists-container">
        {playlists.map(playlist => (
          <div className="playlist-card">
          <div className="playlist-image">
            <img 
              src={playlist.imageUrl} 
              alt={playlist.title}
              onError={(e) => {
                e.target.src = 'https://example.com/default-playlist-image.jpg'; // Запасное изображение
              }}
            />
          </div>
          <div className="playlist-info">
            <div className="track-title">
              <h3>{playlist.title} </h3>
              <span>{playlist.trackCount}</span>
            </div>
            <p className="subtitle">{playlist.subtitle}</p>
            <p className="description">{playlist.description}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistCollection;