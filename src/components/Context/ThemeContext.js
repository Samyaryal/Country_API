import React from "react";

export const themes = {
  light: {
    color: "black",
    background : "#ADD8E6"
  },
  dark: {
    color: "white",
    background: " #424242"
  }
}

const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
});

export default ThemeContext;
