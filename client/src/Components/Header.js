import React, {useState, useEffect} from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMorde(!darkmode);
  }

  return(
    <nav>
    <h1>Womens World Cup Google Stats</h1>
    </nav>

  )
}

export default Header