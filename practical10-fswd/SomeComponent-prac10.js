// SomeComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

function SomeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default SomeComponent;
