import React from "react";
import Navbar from "./components/Navbar";
import { FaLeaf } from "react-icons/fa";
import { useEffect, useState } from "react";
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

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after navigating
    }
  };

  return (
    <div className="max-h-screen w-full lg:max-h-screen lg:h-full overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden lg:flex lg:flex-row lg:gap-4">
      {/* Toggle Button */}

      {/* Navbar */}
      <div className="hidden md:block md:ml-5 lg:mt-5 lg:ml-18">
        <Navbar />
      </div>

      {/* BIO */}

      <div className="md:w-190 md:ml-25 md:mt-[-400px] lg:w-100 lg:h-170 lg:mt-7 lg:ml-[-15px] bg-[#f3fbff] dark:bg-[#1f2937] rounded-2xl lg:shadow-lg lg:shadow-cyan-300 overflow-hidden">
        {/* Top left: Dark Mode Toggle Button start */}
        <div className="absolute top-4 left-4 md:hidden z-30">
          <button
            onClick={toggleDarkMode}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-colors duration-300 ${
              darkMode ? "bg-[#1a1a1a]" : "bg-white"
            }`}
          >
            <img
              src={darkMode ? "/images/blueMoon.png" : "/images/yellowSun.png"}
              alt="Toggle Theme"
              className="w-8 h-8"
            />
          </button>
        </div>

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
            className={`fixed top-12 right-0 md:hidden z-40 bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg shadow-amber-200 dark:shadow-cyan-300 overflow-hidden
                    transition-[max-height,opacity] duration-300 ease-in-out
                    ${
                      menuOpen
                        ? "max-h-68 opacity-100 border border-gray-300 dark:border-none"
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

        {/* Top Banner with Avatar */}
        <div className="bg-gradient-to-r bg-blue-400 dark:bg-blue-500 h-45 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src="../images/shivam.png"
              alt="Profile"
              className="w-38 h-38 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="pt-16 pb-6 text-center px-4">
          <h2 className="text-[25px] mt-1 font-bold text-gray-800 dark:text-white">
            Shivam Choughule
          </h2>
          <p className="text-blue-500 font-medium mt-1">
            Full-Stack Web Developer
          </p>
          <p className="text-gray-400 text-sm mt-1">Mumbai, India</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6 text-gray-600 text-xl">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] hover:bg-blue-400 cursor-pointer transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/ShivamChoughule1",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <img
                className="w-6 h-6"
                src="../images/github_logo.png"
                alt="GitHub"
              />
            </div>

            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] hover:bg-blue-400 cursor-pointer transition-colors"
              onClick={() =>
                window.open(
                  "https://x.com/your-handle",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <img className="w-5 h-5" src="../images/X_logo_img.png" alt="X" />
            </div>

            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] hover:bg-blue-400 cursor-pointer transition-colors"
              onClick={() =>
                window.open(
                  "https://instagram.com/your-username",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <img
                className="w-6 h-6"
                src="../images/instagram_image.png"
                alt="Instagram"
              />
            </div>

            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] hover:bg-blue-400 cursor-pointer transition-colors"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shivam-choughule-1639212a6/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <img
                className="w-6 h-6"
                src="../images/linkedin_image.png"
                alt="LinkedIn"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 inline-flex items-center"
            >
              <img
                className="w-7 h-7 filter brightness-0 invert"
                src="../images/download.png"
                alt=""
              />
              My Resume
            </a>
            <a
              href="#"
              onClick={() => scrollToSection("contact")}
              className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md font-medium hover:bg-blue-50 inline-flex items-center"
            >
              <img className="w-7 h-7" src="../images/mail.png" alt="" />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* BIO ENDS */}

      {/* MAIN */}

      <div className="md:mt-8 lg:mt-7 lg:max-h-[700px] lg:mb-[21.5px] lg:w-220 thin-blue-scrollbar scroll-smooth bg-[#ebf9ff] dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl lg:shadow-lg lg:shadow-cyan-300 lg:overflow-y-scroll lg:overflow-x-hidden">
        <div id="about" className=" max-h-[678px]">
          <h1 className=" text-4xl font-bold mb-4">
            Hey <span className="text-blue-400 dark:text-blue-400">there!</span>{" "}
            👋
          </h1>
          <p className="mb-6 text-[#3b3b3b] dark:text-white">
            I'm thrilled to tell you a bit about myself. I have over six years
            of IT experience, specializing in PHP, Database Development, and
            open-source frameworks. If you're in need of a motivated team
            player, let's connect!
          </p>
          <div className="grid grid-cols-3 gap-4">
            {/* Websites Designed */}
            <div className="bg-[#e2f6ff] p-4 rounded-2xl text-center dark:bg-[#111827] hover:shadow-lg hover:shadow-cyan-400 transition-all duration-200 group">
              <div className="flex items-center justify-center gap-5 mb-3">
                {/* Icon */}
                <div className="bg-[#cbebff] dark:bg-[#354d70] p-2 rounded-2xl mt-4 transition-all duration-200 group-hover:bg-[#b3dfff] dark:group-hover:bg-[#1d3252]">
                  <img
                    className="w-10 h-10"
                    src="../images/computer.png"
                    alt="COMPUTER"
                  />
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="text-3xl font-bold mr-4 mt-2">2K+</div>
                  <div className="text-[#3b3b3b] dark:text-gray-400 text-sm leading-tight">
                    Websites <br /> Designed
                  </div>
                </div>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="bg-[#e2f6ff] p-4 rounded-2xl text-center dark:bg-[#111827] hover:shadow-lg hover:shadow-cyan-400 transition-all duration-200 group">
              <div className="flex items-center justify-center gap-5 mb-3">
                {/* Icon */}
                <div className="bg-[#cbebff] dark:bg-[#354d70] p-2 rounded-2xl mt-4 transition-all duration-200 group-hover:bg-[#b3dfff] dark:group-hover:bg-[#1d3252]">
                  <img
                    className="w-10 h-10"
                    src="../images/computer.png"
                    alt="COMPUTER"
                  />
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="text-3xl font-bold mr-4 mt-2">2K+</div>
                  <div className="text-[#3b3b3b] dark:text-gray-400 text-sm leading-tight">
                    Websites <br /> Designed
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="bg-[#e2f6ff] p-4 rounded-2xl text-center dark:bg-[#111827] hover:shadow-lg hover:shadow-cyan-400 transition-all duration-200 group">
              <div className="flex items-center justify-center gap-5 mb-3">
                {/* Icon */}
                <div className="bg-[#cbebff] dark:bg-[#354d70] p-2 rounded-2xl mt-4 transition-all duration-200 group-hover:bg-[#b3dfff] dark:group-hover:bg-[#1d3252]">
                  <img
                    className="w-10 h-10"
                    src="../images/computer.png"
                    alt="COMPUTER"
                  />
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="text-3xl font-bold mr-4 mt-2">2K+</div>
                  <div className="text-[#3b3b3b] dark:text-gray-400 text-sm leading-tight">
                    Websites <br /> Designed
                  </div>
                </div>
              </div>
            </div>

            {/* My Skills */}

            <h1 className="mt-4 text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">My</span>
              <span className="text-blue-400 dark:text-blue-400 mr-2">
                Skills
              </span>
              <span className="ml-2 mt-1 flex-grow border-t-2 border-blue-300"></span>
            </h1>
          </div>

          {/* Programming Languages */}
          <div className="custom-scroll scrollbar-thin scroll-smooth flex overflow-x-auto space-x-4 p-2 pb-5">
            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>

            <div className="flex-shrink-0 bg-[#c4ecff] dark:bg-[#111827] text-center rounded-xl p-4 w-45 shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h2 className="text-black font-bold dark:text-white text-lg mb-1">
                HTML5
              </h2>
              <p className="text-blue-500 font-bold text-md">95%</p>
            </div>
          </div>

          {/* My Skills - Programming Languages Ends ///////*/}
        </div>

        {/* My Skills - DB Start */}

        <div className="flex flex-wrap gap-6 mt-10">
          {/* MySQL */}
          <div className="bg-[#e2f6ff] dark:bg-[#0f172a] rounded-2xl p-6 ml-2 flex items-center gap-4 w-95 h-35 shadow-md">
            <div className="relative w-16 h-16">
              <svg
                className="transform -rotate-90 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-gray-300 dark:stroke-gray-700"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-blue-500"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="37.68"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black dark:text-white text-sm font-bold">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  className="w-5 h-5 filter invert brightness-150 saturate-200 hue-rotate-180"
                />
                85%
              </div>
            </div>
            <div className="text-black dark:text-white text-lg font-bold">
              MySQL
            </div>
          </div>

          {/* MongoDB */}
          <div className="bg-[#e2f6ff] dark:bg-[#0f172a] rounded-2xl p-6 flex items-center gap-4 w-95 h-35 shadow-md">
            <div className="relative w-16 h-16">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-300 dark:text-gray-700"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="80, 100"
                  fill="none"
                  d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <FaLeaf className="text-blue-500 dark:text-cyan-300 text-sm" />
                <span className="text-black dark:text-white text-sm font-bold">
                  80%
                </span>
              </div>
            </div>
            <span className="text-black dark:text-white text-lg font-bold">
              MongoDB
            </span>
          </div>
        </div>

        {/* My Skills - DB Ends */}

        <div id="career" className="mt-7 max-h-[1200px]">
          {/* My Experience Start */}

          <div className="mt-15">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mr-4">
                <span className="text-black dark:text-white">My </span>
                Experience
              </h2>
              <span className="w-[20%] ml-2 mt-1 border-t-2 border-blue-300"></span>
            </div>

            <div className="flex">
              {/* Vertical Line & Circles */}
              <div className="relative h-[500px] w-16 flex flex-col items-center">
                {/* Line Segment 1 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[40px] w-[2px] h-[156px] bg-blue-400"></div>

                {/* Line Segment 2 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[235px] w-[2px] h-[156px] bg-blue-400"></div>

                {/* Line Segment 3 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[428px] w-[2px] h-[110px] bg-blue-400"></div>

                {/* Top Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-400 bg-transparent flex items-center justify-center mt-0">
                  <img
                    src="../images/pythonLogo.png"
                    alt="Icon 1"
                    className="w-5 h-5"
                  />
                </div>

                {/* Middle Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-400 bg-transparent flex items-center justify-center mt-[156px]">
                  <img
                    src="../images/DBLogo.png"
                    alt="Icon 2"
                    className="w-5 h-5"
                  />
                </div>

                {/* Bottom Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-400 bg-transparent flex items-center justify-center mt-[153px]">
                  <img
                    src="../images/developerLogo.png"
                    alt="Icon 3"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {/* Experience Cards */}
              <div className="flex flex-col space-y-[40px]">
                {/* Card 1 */}
                <div className="dark:bg-[#1e293b] mt-[-22px] p-6 w-full max-w-3xl rounded-2xl hover:shadow-lg transition-all duration-200 dark:hover:shadow-cyan-400">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Senior Python Developer
                    </h3>
                    <span className="text-sm font-bold bg-[#e2efff] text-blue-600 dark:text-blue-400 dark:bg-[#24354b] px-3 py-1 rounded-full">
                      Oct, 2018 - Dec, 2020
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    Google Inc.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Led the development of machine learning algorithms and data
                    processing pipelines. Collaborated with cross-functional
                    teams to implement scalable solutions for complex data
                    challenges. Mentored junior developers and contributed to
                    open-source projects.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="dark:bg-[#1e293b] mt-[-24px] p-6 w-full max-w-3xl rounded-2xl hover:shadow-lg transition-all duration-200 dark:hover:shadow-cyan-400">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Senior Python Developer
                    </h3>
                    <span className="text-sm font-bold bg-[#e2efff] text-blue-600 dark:text-blue-400 dark:bg-[#24354b] px-3 py-1 rounded-full">
                      Oct, 2018 - Dec, 2020
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    Google Inc.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Led the development of machine learning algorithms and data
                    processing pipelines. Collaborated with cross-functional
                    teams to implement scalable solutions for complex data
                    challenges. Mentored junior developers and contributed to
                    open-source projects.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="dark:bg-[#1e293b] mt-[-26px] p-6 w-full max-w-3xl rounded-2xl hover:shadow-lg transition-all duration-200 dark:hover:shadow-cyan-400">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Senior Python Developer
                    </h3>
                    <span className="text-sm font-bold bg-[#e2efff] text-blue-600 dark:text-blue-400 dark:bg-[#24354b] px-3 py-1 rounded-full">
                      Oct, 2018 - Dec, 2020
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    Google Inc.
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Led the development of machine learning algorithms and data
                    processing pipelines. Collaborated with cross-functional
                    teams to implement scalable solutions for complex data
                    challenges. Mentored junior developers and contributed to
                    open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* My Experience End */}

          {/* My Education Start */}

          <div className="mt-12 h-120">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mr-4">
                <span className="text-black dark:text-white">My </span>Education
              </h2>
              <span className="w-[20%] ml-2 mt-1 border-t-2 border-blue-300"></span>
            </div>

            <div className="flex">
              {/* Vertical Line & Circles */}
              <div className="relative h-[500px] w-16 flex flex-col items-center">
                {/* Line Segment 1 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[40px] w-[2px] h-[156px] bg-blue-400"></div>

                {/* Line Segment 2 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[235px] w-[2px] h-[120px] bg-blue-400"></div>

                {/* Top Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-400 bg-transparent flex items-center justify-center mt-0">
                  <img
                    src="../images/masters_logo.png"
                    alt="Icon 1"
                    className="w-20 h-10"
                  />
                </div>

                {/* Middle Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-blue-400 bg-transparent flex items-center justify-center mt-[156px]">
                  <img
                    src="../images/bachelor_logo.png"
                    alt="Icon 2"
                    className="w-20 h-10"
                  />
                </div>
              </div>

              {/* Education Cards */}
              <div className="flex flex-col space-y-[40px]">
                {/* Masters Card */}
                <div className="dark:bg-[#1e293b] mt-[-22px] p-6 w-full max-w-3xl rounded-2xl hover:shadow-lg transition-all duration-200 dark:hover:shadow-cyan-400">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Master of Technology in Computer Engineering
                    </h3>
                    <span className="text-sm font-bold bg-[#e2efff] text-blue-600 dark:text-blue-400 dark:bg-[#24354b] px-3 py-1 rounded-full">
                      2025 - 2027
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    KJ Somaiya College of Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Led the development of machine learning algorithms and data
                    processing pipelines. Collaborated with cross-functional
                    teams to implement scalable solutions for complex data
                    challenges. Mentored junior developers and contributed to
                    open-source projects.
                  </p>
                </div>

                {/* Bachelors Card */}
                <div className="dark:bg-[#1e293b] mt-[-24px] p-6 w-full max-w-3xl rounded-2xl hover:shadow-lg transition-all duration-200 dark:hover:shadow-cyan-400">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Bachelor of Engineering in Electronics Engineering
                    </h3>
                    <span className="text-sm font-bold bg-[#e2efff] text-blue-600 dark:text-blue-400 dark:bg-[#24354b] px-3 py-1 rounded-full">
                      2020 - 2024
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    Vidyalankar Institute of Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    I hold a Bachelor's degree in Electronics Engineering with a
                    Major (Honors) in Artificial Intelligence and Machine
                    Learning. Throughout the course of my academic journey, I
                    developed a strong foundation in both core electronics
                    principles and advanced AI/ML technologies. My commitment to
                    academic excellence is reflected in my Cumulative Grade
                    Performance Index (CGPA) of approximately 9.0 out of 10.0
                    for the examination held in May 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Education End////////////// */}
        </div>

        <div id="projects" className="mt-180 md:mt-7 lg:mt-7 max-h-[1000px]">
          {/* My Projects Start */}
          <div className="mt-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mr-4">
                <span className="text-black dark:text-white">My </span>Projects
              </h2>
              <span className="w-[20%] ml-2 mt-1 border-t-2 border-blue-300"></span>
            </div>

            <div className="flex flex-wrap gap-6 mt-[-10px]">
              {/* Card 1 */}
              <div className="w-full sm:w-[58%] lg:w-[48%] bg-white dark:bg-[#1e293b] dark:border dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-400 transition">
                <div className="w-99 bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden group relative">
                  {/* Image Container with Hover Dark Effect */}
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src="../images/web_project.jpg"
                      alt="E-commerce Platform Thumbnail"
                      className="object-cover h-full w-full transition duration-300 group-hover:brightness-50"
                    />

                    {/* Overlay Content on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platform
                      </h3>
                      <p className="text-center text-sm font-semibold mb-4">
                        A full-featured e-commerce platform with product
                        management, cart functionality, and payment processing.
                      </p>
                      <div className="flex gap-4">
                        <button
                          className="bg-gray-800 px-4 py-2 text-sm font-bold rounded hover:bg-gray-700"
                          onClick={() => {
                            const modal =
                              document.getElementById("details-modal");
                            modal.showModal();
                          }}
                        >
                          Details
                        </button>
                        <a
                          href="https://your-demo-link.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 px-4 py-2 font-bold text-sm rounded hover:bg-blue-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tags */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-blue-500">
                        E-commerce Platform
                      </h3>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                        Web Development
                      </span>
                    </div>
                    <div className="flex mt-3 flex-wrap gap-2 text-[12px]">
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        MongoDB
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        +1
                      </span>
                    </div>
                  </div>

                  {/* Details Modal */}
                  <dialog
                    id="details-modal"
                    className="rounded-md p-0 shadow-xl w-[95%] max-w-4xl border ml-80 mt-25 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-gray-300"
                  >
                    <div className="flex h-[500px] relative">
                      {/* Left Fixed Section */}
                      <div className="w-1/2 bg-white dark:bg-[#111827] p-4 border-r border-gray-200 dark:border-gray-700">
                        <img
                          src="../images/web_project.jpg"
                          alt="Project Thumbnail"
                          className="w-full h-48 object-cover rounded mb-4"
                        />

                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                          E-commerce Platform
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            React
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            Node.js
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            MongoDB
                          </span>
                        </div>
                      </div>

                      {/* Right Scrollable Section */}
                      <div className="w-1/2 p-4 overflow-y-scroll scroll-thin scroll-blue-400 bg-white dark:bg-[#1e293b]">
                        <button
                          onClick={() =>
                            document.getElementById("details-modal").close()
                          }
                          className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        >
                          <img
                            className="block w-7 h-7 dark:hidden"
                            src="../images/close-icon.png"
                            alt="Close"
                          />
                          {/* white X */}
                          <img
                            className="hidden dark:block w-4 h-4"
                            src="../images/white_X_icon.png"
                            alt="Close"
                          />
                        </button>
                        <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">
                          Project Overview
                        </h3>

                        {[
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                        ].map((text, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              {/* Card 1 Ends */}

              {/* Card 2 */}
              <div className="w-full sm:w-[58%] lg:w-[48%] bg-white dark:bg-[#1e293b] dark:border dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-400 transition">
                <div className="w-99 bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden group relative">
                  {/* Image Container with Hover Dark Effect */}
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src="../images/web_project.jpg"
                      alt="E-commerce Platform Thumbnail"
                      className="object-cover h-full w-full transition duration-300 group-hover:brightness-50"
                    />

                    {/* Overlay Content on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platform
                      </h3>
                      <p className="text-center text-sm font-semibold mb-4">
                        A full-featured e-commerce platform with product
                        management, cart functionality, and payment processing.
                      </p>
                      <div className="flex gap-4">
                        <button
                          className="bg-gray-800 px-4 py-2 text-sm font-bold rounded hover:bg-gray-700"
                          onClick={() => {
                            const modal =
                              document.getElementById("details-modal");
                            modal.showModal();
                          }}
                        >
                          Details
                        </button>
                        <a
                          href="https://your-demo-link.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 px-4 py-2 font-bold text-sm rounded hover:bg-blue-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tags */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-blue-500">
                        E-commerce Platform
                      </h3>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                        Web Development
                      </span>
                    </div>
                    <div className="flex mt-3 flex-wrap gap-2 text-[12px]">
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        MongoDB
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        +1
                      </span>
                    </div>
                  </div>

                  {/* Details Modal */}
                  <dialog
                    id="details-modal"
                    className="rounded-md p-0 shadow-xl w-[95%] max-w-4xl border ml-80 mt-25 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-gray-300"
                  >
                    <div className="flex h-[500px] relative">
                      {/* Left Fixed Section */}
                      <div className="w-1/2 bg-white dark:bg-[#111827] p-4 border-r border-gray-200 dark:border-gray-700">
                        <img
                          src="../images/web_project.jpg"
                          alt="Project Thumbnail"
                          className="w-full h-48 object-cover rounded mb-4"
                        />

                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                          E-commerce Platform
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            React
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            Node.js
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            MongoDB
                          </span>
                        </div>
                      </div>

                      {/* Right Scrollable Section */}
                      <div className="w-1/2 p-4 overflow-y-scroll scroll-thin scroll-blue-400 bg-white dark:bg-[#1e293b]">
                        <button
                          onClick={() =>
                            document.getElementById("details-modal").close()
                          }
                          className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        >
                          <img
                            className="block w-7 h-7 dark:hidden"
                            src="../images/close-icon.png"
                            alt="Close"
                          />
                          {/* white X */}
                          <img
                            className="hidden dark:block w-4 h-4"
                            src="../images/white_X_icon.png"
                            alt="Close"
                          />
                        </button>
                        <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">
                          Project Overview
                        </h3>

                        {[
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                        ].map((text, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              {/* Card 2 Ends */}

              {/* Card 3 */}
              <div className="w-full sm:w-[58%] lg:w-[48%] bg-white dark:bg-[#1e293b] dark:border dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-400 transition">
                <div className="w-99 bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden group relative">
                  {/* Image Container with Hover Dark Effect */}
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src="../images/web_project.jpg"
                      alt="E-commerce Platform Thumbnail"
                      className="object-cover h-full w-full transition duration-300 group-hover:brightness-50"
                    />

                    {/* Overlay Content on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platform
                      </h3>
                      <p className="text-center text-sm font-semibold mb-4">
                        A full-featured e-commerce platform with product
                        management, cart functionality, and payment processing.
                      </p>
                      <div className="flex gap-4">
                        <button
                          className="bg-gray-800 px-4 py-2 text-sm font-bold rounded hover:bg-gray-700"
                          onClick={() => {
                            const modal =
                              document.getElementById("details-modal");
                            modal.showModal();
                          }}
                        >
                          Details
                        </button>
                        <a
                          href="https://your-demo-link.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 px-4 py-2 font-bold text-sm rounded hover:bg-blue-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tags */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-blue-500">
                        E-commerce Platform
                      </h3>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                        Web Development
                      </span>
                    </div>
                    <div className="flex mt-3 flex-wrap gap-2 text-[12px]">
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        MongoDB
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        +1
                      </span>
                    </div>
                  </div>

                  {/* Details Modal */}
                  <dialog
                    id="details-modal"
                    className="rounded-md p-0 shadow-xl w-[95%] max-w-4xl border ml-80 mt-25 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-gray-300"
                  >
                    <div className="flex h-[500px] relative">
                      {/* Left Fixed Section */}
                      <div className="w-1/2 bg-white dark:bg-[#111827] p-4 border-r border-gray-200 dark:border-gray-700">
                        <img
                          src="../images/web_project.jpg"
                          alt="Project Thumbnail"
                          className="w-full h-48 object-cover rounded mb-4"
                        />

                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                          E-commerce Platform
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            React
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            Node.js
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            MongoDB
                          </span>
                        </div>
                      </div>

                      {/* Right Scrollable Section */}
                      <div className="w-1/2 p-4 overflow-y-scroll scroll-thin scroll-blue-400 bg-white dark:bg-[#1e293b]">
                        <button
                          onClick={() =>
                            document.getElementById("details-modal").close()
                          }
                          className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        >
                          <img
                            className="block w-7 h-7 dark:hidden"
                            src="../images/close-icon.png"
                            alt="Close"
                          />
                          {/* white X */}
                          <img
                            className="hidden dark:block w-4 h-4"
                            src="../images/white_X_icon.png"
                            alt="Close"
                          />
                        </button>
                        <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">
                          Project Overview
                        </h3>

                        {[
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                        ].map((text, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              {/* Card 3 Ends */}

              {/* Card 4 */}
              <div className="w-full sm:w-[58%] lg:w-[48%] bg-white dark:bg-[#1e293b] dark:border dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-400 transition">
                <div className="w-99 bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden group relative">
                  {/* Image Container with Hover Dark Effect */}
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src="../images/web_project.jpg"
                      alt="E-commerce Platform Thumbnail"
                      className="object-cover h-full w-full transition duration-300 group-hover:brightness-50"
                    />

                    {/* Overlay Content on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platform
                      </h3>
                      <p className="text-center text-sm font-semibold mb-4">
                        A full-featured e-commerce platform with product
                        management, cart functionality, and payment processing.
                      </p>
                      <div className="flex gap-4">
                        <button
                          className="bg-gray-800 px-4 py-2 text-sm font-bold rounded hover:bg-gray-700"
                          onClick={() => {
                            const modal =
                              document.getElementById("details-modal");
                            modal.showModal();
                          }}
                        >
                          Details
                        </button>
                        <a
                          href="https://your-demo-link.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 px-4 py-2 font-bold text-sm rounded hover:bg-blue-500"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tags */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-blue-500">
                        E-commerce Platform
                      </h3>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                        Web Development
                      </span>
                    </div>
                    <div className="flex mt-3 flex-wrap gap-2 text-[12px]">
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        MongoDB
                      </span>
                      <span className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-2 py-1 rounded-full">
                        +1
                      </span>
                    </div>
                  </div>

                  {/* Details Modal */}
                  <dialog
                    id="details-modal"
                    className="rounded-md p-0 shadow-xl w-[95%] max-w-4xl border ml-80 mt-25 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-gray-300"
                  >
                    <div className="flex h-[500px] relative">
                      {/* Left Fixed Section */}
                      <div className="w-1/2 bg-white dark:bg-[#111827] p-4 border-r border-gray-200 dark:border-gray-700">
                        <img
                          src="../images/web_project.jpg"
                          alt="Project Thumbnail"
                          className="w-full h-48 object-cover rounded mb-4"
                        />

                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                          E-commerce Platform
                        </h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            React
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            Node.js
                          </span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
                            MongoDB
                          </span>
                        </div>
                      </div>

                      {/* Right Scrollable Section */}
                      <div className="w-1/2 p-4 overflow-y-scroll scroll-thin scroll-blue-400 bg-white dark:bg-[#1e293b]">
                        <button
                          onClick={() =>
                            document.getElementById("details-modal").close()
                          }
                          className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        >
                          <img
                            className="block w-7 h-7 dark:hidden"
                            src="../images/close-icon.png"
                            alt="Close"
                          />
                          {/* white X */}
                          <img
                            className="hidden dark:block w-4 h-4"
                            src="../images/white_X_icon.png"
                            alt="Close"
                          />
                        </button>
                        <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">
                          Project Overview
                        </h3>

                        {[
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla nec augue vehicula, at commodo justo dapibus.",
                          "Vestibulum id venenatis sapien. Sed lacinia, nunc ut vehicula convallis, velit sapien ultricies arcu.",
                          "Morbi quis massa a quam gravida aliquet. Suspendisse nec velit a ligula pretium gravida.",
                          "Donec convallis rutrum velit, nec congue nunc congue id.",
                          "Nam id porta odio. Cras nec justo erat.",
                          "Proin vestibulum, nunc vitae vulputate porttitor.",
                          "Integer ut ligula sapien. Pellentesque eu quam et velit tincidunt accumsan.",
                        ].map((text, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              {/* Card 4 Ends */}
            </div>
          </div>
          {/* My Projects end///////////////////////////// */}
        </div>

        <div id="contact" className="mt-7 max-h-[1200px] lg:max-h-[1000px]">
          {/* My Contact Start */}
          <div className="mt-20">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mr-4">
                <span className="text-black dark:text-white">Get in </span>Touch
              </h2>
              <span className="w-[20%] ml-2 mt-1 border-t-2 border-blue-300"></span>
            </div>

            <div className="flex flex-col mt-70 lg:flex-row gap-8 p-6 lg:mt-[-45px] mb-10">
              {/* Left Column: Contact Info + Availability */}
              <div className="flex flex-col gap-6 w-70 ">
                {/* Contact Info Starts */}
                <div className="p-6 space-y-6">
                  {/* Email */}
                  <div className="flex items-center ml-[-30px] space-x-4 transition-colors p-2 rounded-lg">
                    {/* Icon Container */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] transition-colors">
                      <img
                        src="../images/mm.png"
                        alt="Email Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text Content */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-white">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-white text-[13px]">
                        shivamchoughule1@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center ml-[-30px] space-x-4 transition-colors p-2 rounded-lg">
                    {/* Icon Container */}
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] transition-colors">
                      <img
                        src="../images/phone_icon.png"
                        alt="Email Icon"
                        className="w-5 h-5"
                      />
                    </div>

                    {/* Text Content */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-white">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-white">
                        +91 7738176617
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center ml-[-30px] space-x-4 transition-colors p-2 rounded-lg">
                    {/* Icon Container */}
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#374151] transition-colors">
                      <img
                        src="../images/location_icon.png"
                        alt="Email Icon"
                        className="w-5 h-5"
                      />
                    </div>

                    {/* Text Content */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-white">
                        Location
                      </p>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </div>
                </div>
                {/* Contact Info Ends */}

                {/* Availability Starts */}
                <div className="bg-blue-50 border ml-4 border-blue-300 rounded-2xl p-4 w-60 dark:bg-[#24354b] dark:border-blue-900">
                  <p className="text-sm font-bold text-gray-800 dark:text-white mb-2">
                    Availability
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      Available
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 dark:text-white">
                    I'm currently available for freelance work and full-time
                    positions.
                  </p>
                </div>
                {/* Availability Ends */}
              </div>

              {/* Right Column: Contact Me Form */}
              <div className="lg:w-130 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Send Me a Message
                </h2>

                <form className="space-y-4">
                  {/* Name and Email */}
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center space-x-2"
                  >
                    <img
                      src="../images/pp2.png"
                      alt="Contact Icon"
                      className="w-7 h-7"
                    />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* My Contact Ends */}
        </div>

        {/* Main End */}
      </div>

      {/* Return Div */}
    </div>
  );
};

export default App;
