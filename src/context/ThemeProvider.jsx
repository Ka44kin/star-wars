import React, { useContext } from "react";
import { useState } from "react";
import { changeCssVar } from "@services/changeCssVar";

const ThemeContext = React.createContext();

export const ThemeProvider = ({children , ...props}) => {
    const[ theme, setTheme ] = useState(null);

    const change = name => {
        setTheme(name);
        changeCssVar(name);
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            change: change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);