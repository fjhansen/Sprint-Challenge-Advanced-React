import React, {useState, useEffect} from "react";
import {useDarkMode} from '../hooks/useDarkMode'

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return(
    <nav style={{display: 'flex', flexDirection:'column'}} className={darkMode ? "navbar dark-mode" : "navbar light-mode"}>
    <h1 >Womens World Cup Google Stats</h1>
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center', margin: '2%'}}>
    <span style={{color: darkMode ? "grey" : "orange", fontSize:'3em' ,marginLeft: '-60%'}}>☼</span>
    <div className="dark-mode__toggle" style={{}}>
      
      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
        
        
      />
    </div>
    <span style={{color: darkMode ? "purple" : "grey", fontSize:'3em', marginRight: '-60%'}}>☾</span>
    </div>
  </nav>
  )
}

export default Header