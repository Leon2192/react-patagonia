import React, { useState } from "react";
import {
  BsFillChatLeftFill,
  BsFillEnvelopeAtFill,
  BsFillBarChartFill,
} from "react-icons/bs";
import { HiHome } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [isActive, setIsActive] = useState("Our Story");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const sidebarOptions = [
    { name: "Our Story", icon: <HiHome />, current: false, id: "#OurStory" },
    {
      name: "Our Foods",
      icon: <BsFillBarChartFill />,
      current: false,
      id: "#OurFoods",
    },
    {
      name: "Private Label",
      icon: <BsFillEnvelopeAtFill />,
      current: isActive === "Private Label" ? true : false,
      id: "#PrivateLabel",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsHover(false);
  };

  const handleLinkClick = (name) => {
    setIsActive(name);
    setIsSidebarOpen(false);
  };

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeaveHover = () => {
    setIsHover(false);
  };

  return (
    <div className="lg:flex lg:flex-col">
      <div className="lg:hidden h-16 shrink-0 flex items-center justify-around">
        <img src="/Brand/logo.png" alt="Logo" width={90} height={90} />
        <div className="flex ">
          <img
            src="/Banderas/estadosunidos.png"
            alt="Bandera 1"
            width={50}
            height={50}
            className="w-6 h-4 mr-2"
          />
          <img
            src="/Banderas/espania.png"
            alt="Bandera 1"
            width={50}
            height={50}
            className="w-6 h-4 mr-2"
          />
        </div>

        <a className="btn-sidebar px-2 py-1 mr-3" href="/">
          <span className="flex items-center m-2">
            Lets talk! <BsFillChatLeftFill className="ml-2" />
          </span>
        </a>

        <h1
          className={`text-3xl text-center font-bold cursor-pointer ${isSidebarOpen ? "pl-6" : ""
            }`}
          onClick={toggleSidebar}
        >
          ☰
        </h1>
      </div>
      <div
        className={`lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col transition-all duration-300 ease-in-out mt-3 ${isSidebarOpen ? "ml-0" : "-ml-72"
          }`}
      >
        <div
          className={`flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2 ${isSidebarOpen ? "" : "max-h-0 overflow-hidden"
            }`}
        >
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {sidebarOptions.map((option) => (
                    <li key={option.name}>
                      <a
                        href={option.id}
                        className={classNames(
                          option.current
                            ? "bg-gray-700 text-white"
                            : `text-gray-400 ${isHover && isSidebarOpen
                              ? "hover:text-white hover:bg-gray-700"
                              : ""
                            }`,
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                        onClick={() => handleLinkClick(option.name)}
                        onMouseEnter={() => {
                          if (isSidebarOpen) {
                            handleHover();
                          }
                        }}
                        onMouseLeave={() => {
                          if (isSidebarOpen) {
                            handleLeaveHover();
                          }
                        }}
                      >
                        {option.icon}
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
