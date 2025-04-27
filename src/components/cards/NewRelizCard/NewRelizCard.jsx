// src/Slider.js
import React, { useState } from 'react';
import './NewRelizCard.css';
import sqwozBab from './../../../image/img/SQWOZBAB.jpg';
import Pharaon from './../../../image/img/1QjX8lbNSCU.jpg';
import Thag from './../../../image/img/A_0rXOSM9SU.jpg';

export const NewRelizCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { bgImage: sqwozBab, title: 'SQWOZ BAB — TOKYO' },
        { bgImage: Pharaon, title: 'PHARAON - 10:13' },
        { bgImage: Thag, title: 'FRIENDLY THUG 52NGG - Graf Monte-Cristo / Most Valuable Pirate' },
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='main'>
            <h2>Новые релизы</h2>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                <button>Слушать</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-nav prev" onClick={prevSlide}>&#10094;</button>
                <button className="slider-nav next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>

    );
};
