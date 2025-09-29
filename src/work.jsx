import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Smooth scroll to section & close menu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after navigating
    }
  };

  return (
    <>
      {/* Hamburger Menu Toggle (Top Right) - Mobile Only */}
      <div className="absolute top-4 right-4 md:hidden z-30">
        {!menuOpen ? (
          <FaBars
            className="text-2xl text-white cursor-pointer active:scale-90"
            onClick={handleMenuToggle}
          />
        ) : (
          <FaTimes
            className="text-2xl text-red-500 cursor-pointer active:scale-90"
            onClick={handleMenuToggle}
          />
        )}

        {/* Mobile Navbar - Sliding down from top */}
        <div
          className={`fixed top-12 right-4 md:hidden z-40 bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg shadow-amber-200 dark:shadow-cyan-300 overflow-hidden
            transition-[max-height,opacity] duration-300 ease-in-out
            ${
              menuOpen
                ? "max-h-60 opacity-100 border border-gray-300 dark:border-none"
                : "max-h-0 opacity-0 border-0"
            }
          `}
          style={{ width: "4.5rem", minHeight: "12rem" }}
        >
          <div className="flex flex-col items-center text-sm gap-4 py-2">
            {/* About */}
            <div
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-center pt-1 hover:scale-110 hover:bg-gray-200 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-150 w-full"
              title="About"
            >
              <img
                className="w-7 mx-auto"
                src="../../images/contactme.png"
                alt="ABOUT"
              />
              <div className="mt-1 text-gray-500 dark:text-white text-[10px] font-bold">
                ABOUT
              </div>
            </div>

            {/* Career */}
            <div
              onClick={() => scrollToSection("career")}
              className="cursor-pointer text-center pt-1 hover:scale-110 hover:bg-gray-200 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-150 w-full"
              title="Career"
            >
              <img
                className="w-8 mx-auto"
                src="../../images/brownbag.png"
                alt="CAREER"
              />
              <div className="text-gray-500 dark:text-white text-[10px] font-bold">
                CAREER
              </div>
            </div>

            {/* Projects */}
            <div
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer text-center pt-1 hover:scale-110 hover:bg-gray-200 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-150 w-full"
              title="Projects"
            >
              <img
                className="w-7 mx-auto"
                src="../../images/folder_image_1.png"
                alt="PROJECTS"
              />
              <div className="text-gray-500 dark:text-white text-[10px] font-bold">
                PROJECTS
              </div>
            </div>

            {/* Contact */}
            <div
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-center pt-1 hover:scale-110 hover:bg-gray-200 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-150 w-full"
              title="Contact"
            >
              <img
                className="w-10 mx-auto"
                src="../../images/paperplane.png"
                alt="CONTACT"
              />
              <div className="text-gray-500 dark:text-white text-[10px] mt-1 font-bold">
                CONTACT
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
