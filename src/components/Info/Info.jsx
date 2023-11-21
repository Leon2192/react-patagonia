import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMedia } from "react-use";

const Info = () => {
  const [width1, setWidth1] = useState(100);
  const [width2, setWidth2] = useState(100);
  const [width3, setWidth3] = useState(100);

  const isDesktop = useMedia("(min-width: 1024px)", true); // true es el defaultState

  const handleHoverStart1 = () => setWidth1(20);
  const handleHoverEnd1 = () => setWidth1(10);

  const handleHoverStart2 = () => setWidth2(20);
  const handleHoverEnd2 = () => setWidth2(10);

  const handleHoverStart3 = () => setWidth3(20);
  const handleHoverEnd3 = () => setWidth3(10);

  return (
    <div
      className="flex flex-col md:flex-row w-full info-container"
      id="OurFoods"
    >
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2">
        <div className="mb-6 text-center md:p-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 md:mb-5"
            style={{
              color: "#ffb703",
            }}
          >
            Our food
          </h2>
          <p className="text-base md:text-lg font-bold hidden md:block">
            Mabel’s Foods has developed a singular line of products that will
            enhance your menu – from center-of-the-plate to sides, small plates,
            appetizers, and bar menu offerings.
          </p>
        </div>
        <a className="btn-discover px-2 py-1 mr-3" href="/">
          <span className="flex items-center m-2">Discover more!</span>
        </a>
      </div>

      {/* Imagen 1 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width1 + 2}%` } : {}}
        onHoverStart={handleHoverStart1}
        onHoverEnd={handleHoverEnd1}
      >
        <img
          src="/Banners/services3.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Snacks</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="/"
          >
            View
          </a>
        </div>
      </motion.div>

      {/* Imagen 2 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width2 + 2}%` } : {}}
        onHoverStart={handleHoverStart2}
        onHoverEnd={handleHoverEnd2}
      >
        <img
          src="/Banners/services2.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Prepared meals</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="/"
          >
            View
          </a>
        </div>
      </motion.div>

      {/* Imagen 3 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width3 + 2}%` } : {}}
        onHoverStart={handleHoverStart3}
        onHoverEnd={handleHoverEnd3}
      >
        <img
          src="/Banners/services1.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Coming soon</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="/"
          >
            View
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
