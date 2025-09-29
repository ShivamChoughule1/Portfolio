import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="w-22 h-5 flex items-start justify-start p-4 bg-transparent dark:bg-transparent transition-none">
      <label
        onClick={handleToggle}
        className={`w-[40px] h-[80px] rounded-full bg-[#F3F3F3] dark:bg-[#1a1a1a] cursor-pointer relative transition-colors duration-500 overflow-hidden 
          ${darkMode ? "shadow-lg shadow-cyan-300" : ""}`}
        style={!darkMode ? { boxShadow: "0 -10px 15px -3px rgba(251, 191, 36, 0.5)" } : {}}
      >
        <div
          className={`absolute left-1/2 ${
            darkMode ? "top-full -translate-y-[110%]" : "top-0 translate-y-[10%]"
          } -translate-x-1/2 w-[50px] h-[50px] rounded-full bg-[#F3F3F3] dark:bg-[#1a1a1a] flex items-center justify-center overflow-hidden transition-all duration-500 active:h-[60px]`}
        >
          <img
            src="../../images/yellowSun.png"
            alt="Sun"
            className={`w-10 absolute transition-all duration-500 ${
              darkMode ? "mt-[100%] opacity-0" : "mt-0 opacity-100"
            }`}
          />
          <img
            src="../../images/blueMoon.png"
            alt="Moon"
            className={`w-10 absolute transition-all duration-500 ${
              darkMode ? "mt-0 opacity-100" : "mt-[-100%] opacity-0"
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
