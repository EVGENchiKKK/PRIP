import React, { useState, useEffect } from 'react';
import Logo from './../../../image/img/Иконка муз.дорожки.png'; // ваша иконка play
import './GanreContainer.css';
import { getCategories, Spotify } from '../../api/api';
import axios from 'axios';
import { useCategories } from './useCategories';

export const GanreContainer = () => {
    const {loading, error, genres} = useCategories()


    useEffect(() => {
     
        let isMounted = true;

        // const loadGenresFromSpotify = async () => {
        //     try {
        //         1. Получаем access token
        //         const tokenResponse = await axios.post(
        //             'https://accounts.spotify.com/api/token',
        //             'grant_type=client_credentials',
        //             {
        //                 headers: {
        //                     'Content-Type': 'application/x-www-form-urlencoded',
        //                     'Authorization': 'Basic ' + btoa(`${spotify.ClientId}:${spotify.ClientSecret}`),
        //                 },
        //             }
        //         );

        //         const accessToken = tokenResponse.data.access_token;

        //         2. Запрашиваем категории (жанры)
        //         const genresResponse = await axios.get(
        //             'https://api.spotify.com/v1/browse/categories',
        //             {
        //                 params: {
        //                     locale: 'ru_RU', // названия на русском, если доступны
        //                     limit: 20,       // максимум 50
        //                 },
        //                 headers: {
        //                     Authorization: `Bearer ${accessToken}`,
        //                 },
        //             }
        //         );

        //         if (isMounted) {
        //             setGenres(genresResponse.data.categories.items || []);
        //         }
        //     } catch (err) {
        //         console.error('Ошибка при загрузке жанров:', err);
        //         if (isMounted) {
        //             setError('Не удалось загрузить жанры. Проверьте настройки Spotify.');
        //         }
        //     } finally {
        //         if (isMounted) {
        //             setLoading(false);
        //         }
        //     }
        // };

        // loadGenresFromSpotify();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <div className="ganreContainer">Загрузка жанров...</div>;
    }

    if (error) {
        return <div className="ganreContainer"><p className="error">{error}</p></div>;
    }

    if (!genres.length) {
        return <div className="ganreContainer">Жанры не найдены.</div>;
    }

    return (
        <div className="ganreContainer">
            {genres.map((genre) => (
                <div key={genre.id} className="ganreCard">
                    {/* Фоновое изображение из Spotify */}
                    {genre.icons && genre.icons.length > 0 && (
                        <div
                            className="ganreCard__bg"
                            style={{
                                backgroundImage: `url(${genre.icons[0].url})`,
                            }}
                        />
                    )}
                    {/* Иконка воспроизведения */}
                    <img src={Logo} alt="Play" className="ganreCard__logo" />
                    {/* Название жанра из Spotify */}
                    <span className="ganreCard__title">{genre.name}</span>
                </div>
            ))}
        </div>
    );
};