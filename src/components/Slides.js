import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import picture from '../images/lets eat.jpg'

const Slides = () => {
    const sliders = [
        {
            src: "2_recipe_app/src/images/cooking_logo.jpg",
            alt: "cooking logo"
        },
        {
            src: "",
            alt: ""
        },
        {
            src: "",
            alt: ""
        },
        // Lägg till fler bilder här om det behövs
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div className="max-w-full h-[500px] w-full px-4 py-4 relative m-auto">
        {/* Bild */}
        <div className="relative flex justify-center items-center">
            <img className="max-h-full max-w-full" src={picture} alt='lets eat'/>
        </div>
    
        {/* Bildkarusell 
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative">
            <div
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                style={{ backgroundImage: `url(${sliders[currentIndex].src})` }}
            ></div>
            {/* Föregående knapp 
            <div className="absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-orange">
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            {/* Nästa knapp 
            <div className="absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-orange">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
        </div> */}
    </div>
    
    );
};

export default Slides;
