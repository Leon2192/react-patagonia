import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const slideTexts = [
    {
      title: "AUTHENTIC FOOD",
      subtitle:
        "Happily operating since 2011 as a USDA/FDA manufacturing plant in South Florida",
      buttonText: "Our foods",
    },
    {
      title: "TRUST & RELIABILITY",
      subtitle:
        "Happily operating since 2011 as a USDA/FDA manufacturing plant in South Florida",
      buttonText: "Our foods",
    },
    {
      title: "SMART FOOD MANUFACTURING",
      subtitle:
        "Happily operating since 2011 as a USDA/FDA manufacturing plant in South Florida",
      buttonText: "Our foods",
    },
  ];

  const imageVariants = {
    initial: {
      opacity: 1,
      scale: 0.5,
      x: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      scale: [1.02, 1.01, 1.05],
      y: [0, -20, 0],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideTexts.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [slideTexts.length]);

  return (
    <div className="carousel-container relative text-white">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
      >
        {slideTexts.map((slideText, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            animate={index === currentSlide ? "animate" : "initial"}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Brand/banner${index + 1}.png`}
              alt={`Banner ${index + 1}`}
              width={800}
              height={400}
              className="w-full"
            />
          </motion.div>
        ))}
      </Carousel>
      <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
        <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-semibold">
          {slideTexts[currentSlide].title}
        </h1>
        <p className="text-xs sm:text-lg md:text-xl lg:text-2xl mb-4">
          {slideTexts[currentSlide].subtitle}
        </p>

        <a
          className="btn-banner text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
          href="/"
        >
          {slideTexts[currentSlide].buttonText}
        </a>
      </div>
    </div>
  );
};

export default Slider;
