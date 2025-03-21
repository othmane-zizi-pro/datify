"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Change the initial state to 'light' instead of 'dark'
  const [theme, setTheme] = useState("light");
  
  // Rest of your theme provider implementation
  // ...
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 