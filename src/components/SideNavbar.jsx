import React, { useState } from "react";
import { PencilRuler, Image, BoxSelect, Menu } from "lucide-react";

const SideNavbar = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Border",
      icon: BoxSelect,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeToggle, setActiveToggle] = useState(false);

  const handleToggle = () => {
    setActiveToggle(!activeToggle);
  };

  return (
    <div className="md:border md:shadow-sm md:h-screen">
      <Menu
        className="ml-6 cursor-pointer md:hidden"
        width={32}
        height={100}
        onClick={handleToggle}
      />

      <div
        className={`fixed md:relative top-36 md:top-0 left-0 h-full transform ${
          activeToggle ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:block md:w-64 bg-white`}
      >
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-2 text-lg px-7 font-semibold my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white ${
              activeIndex === index && "bg-primary text-white"
            }`}
            key={index}
          >
            <menu.icon /> {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
