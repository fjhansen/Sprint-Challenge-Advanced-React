import React, {useState, useEffect} from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMorde(!darkmode);
  }

  return(
    <nav className={darkMode ? "navbar dark-mode" : "navbar light-mode"}>>
    <h1>Womens World Cup Google Stats</h1>
    <div>
      <span>
      light
      </span>
      <div className="dark-mode-toggle">
        <div 
        onClick={toggleMode}>
          className={darkMode ? 'toggle toggled' : 'toggle'}

        <span>dark</span>
        </div>

      </div>
      <span></span>
    </div>
    </nav>

  )
}

export default Header