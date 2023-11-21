import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div
      className="flex flex-col md:flex-row w-full info-container background-info"
      id="PrivateLabel"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:mr-2">
        <img
          src="/Banners/label.png"
          alt="Placeholder"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col md:mr-2 flex-grow">
        <div className="ml-6 mb-6 md:p-10">
          <h2
            className="text-6xl font-bold mb-6"
            style={{
              color: "#ffb703",
            }}
          >
            Private label
          </h2>
          <p className="text-xl text-white font-bold">
            Mabel’s Foods has developed a singular line of products that will
            enhance your menu.
          </p>
          <br />
          <p className="text-xl text-white font-bold">
            Our practices are run by strict quality controls such as HACCP,
            SSOP, GMP among others. Come meet our team and lets talk about your
            project. Our expertise, equipment, and knowledge will serve as a key
            contributor to the success of your business.
          </p>
        </div>

        <motion.div
          className="flex justify-center md:flex-grow-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <div className="w-full md:max-w-md p-6 bg-transparent rounded-lg">
            <form>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 p-2 w-full border bg-transparent"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 p-2 w-full border bg-transparent"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border bg-transparent"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full border bg-transparent"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border bg-transparent"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-10">
                <textarea
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border bg-transparent"
                  placeholder="Your request"
                />
              </div>

              <div className="flex justify-center">
                <button>Request info</button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
