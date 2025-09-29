import React from "react";
import ToggleButton from "./ToggleButton"; 

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="hidden md:block">
        <ToggleButton />
      </div>
      <div className="w-16 mt-20 ml-1.5 h-75 border-1 border-[#e9e9e9] rounded-2xl p-2 bg-white text-black dark:bg-[#1f2937] dark:border-none dark:text-white transition-all duration-500 shadow-lg shadow-amber-200 dark:shadow-lg dark:shadow-cyan-300 overflow-hidden">
        <div className="flex flex-col items-center text-sm gap-4">
          {/* About Section */}
          <div
            className="text-center pt-2 cursor-pointer hover:scale-108 hover:bg-gray-200 hover:w-13 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-100"
            onClick={() => scrollToSection("about")}
            style={{
              border: "none", // No border by default
            }}
          >
            <img
              className="w-7 mx-auto"
              src="../../images/contactme.png"
              alt="ABOUT"
            />
            <div
              style={{ fontSize: "10px", fontWeight: "bold" }}
              className="mt-1 text-gray-500 dark:text-white"
            >
              ABOUT
            </div>
          </div>

          {/* Career Section */}
          <div
            className="text-center pt-2 cursor-pointer hover:scale-108 hover:bg-gray-200 hover:w-13 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-100"
            onClick={() => scrollToSection("career")}
            style={{
              border: "none", // No border by default
            }}
          >
            <img
              className="w-8 mx-auto"
              src="../../images/brownbag.png"
              alt="CAREER"
            />
            <div
              style={{ fontSize: "10px", fontWeight: "bold" }}
              className="text-gray-500 dark:text-white"
            >
              CAREER
            </div>
          </div>

          {/* Projects Section */}
          <div
            className="text-center pt-2 cursor-pointer hover:scale-108 hover:bg-gray-200 hover:w-13 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-100"
            onClick={() => scrollToSection("projects")}
            style={{
              border: "none", // No border by default
            }}
          >
            <img
              className="w-7 mx-auto"
              src="../../images/folder_image_1.png"
              alt="PROJECTS"
            />
            <div
              style={{ fontSize: "10px", fontWeight: "bold" }}
              className="text-gray-500 dark:text-white"
            >
              PROJECTS
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="text-center pt-2 cursor-pointer hover:scale-108 hover:bg-gray-200 hover:w-13 dark:hover:bg-[#374151] hover:rounded-xl transition-all duration-100"
            onClick={() => scrollToSection("contact")}
          >
            <img
              className="w-10 mx-auto"
              src="../../images/paperplane.png"
              alt="CONTACT"
            />
            <div className="text-[10px] mt-1 font-bold text-gray-500 dark:text-white">
              CONTACT
            </div>
          </div>
          {/* Contact Section Ends */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
