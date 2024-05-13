import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
//import { RxDotFilled } from 'react-icons/rx';

const Slides = () => {
    const sliders = [
        {
            src: "2_recipe_app/src/images/cooking _logo.jpg",
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

    const moveToNextSlide = (slideIndex) => (
        setCurrentIndex(slideIndex)
    );

    return (
        <div className="max-w-[1520px] h-[500px] w-full px-4 py-4 relative m-auto">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                style={{ backgroundImage: `url(${sliders[currentIndex].src})` }}>
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange">
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
        </div>
    );
};

export default Slides;
