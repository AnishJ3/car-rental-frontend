import React from 'react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import slide1 from '../images/rr2.avif'
import slide2 from '../images/rr1.avif'
import slide3 from '../images/rr1.webp'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      title: 'Fast and Reliable Roadside Assistance',
      description: 'Your safety is our priority',
      buttonText: 'Get Assistance'
    },
    {
      image: slide2,
      title: '24/7 Emergency Services',
      description: 'We\'re here when you need us most',
      buttonText: 'Call Now'
    },
    {
      image: slide3,
      title: 'Expert Mechanics, Guaranteed',
      description: 'We\'ll get you back on the road',
      buttonText: 'Learn More'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-8 lg:px-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8">
              {slides[currentSlide].description}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeftIcon size={32} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRightIcon size={32} />
      </button>
    </div>
  );
};

export default HeroSlider;

