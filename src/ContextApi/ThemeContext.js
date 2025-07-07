import React, { useState, createContext } from 'react'
export const ThemeContext = createContext()


function ThemeProvider({ children }) {
    const [dark, isDark] = useState(true);
    return (
        <ThemeContext.Provider value={{ dark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;