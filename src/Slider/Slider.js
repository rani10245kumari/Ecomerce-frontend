// Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds (adjust as needed)

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{
                    transform: `translateX(${-currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`Product ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
