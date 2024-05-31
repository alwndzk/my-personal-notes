import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext'; // Mengubah import

import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className='toggle-theme'onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>
  );
}

export default ToggleTheme;