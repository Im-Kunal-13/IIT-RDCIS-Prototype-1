import React, { useState } from "react";
import ThemeContext from "./themeContext";

const ThemeState = (props) => {
  const [state, setState] = useState("purple");
  const update = () => {
    setState(state === "purple" ? "blue" : "purple");
  };
  return (
    <ThemeContext.Provider value={{ state, update }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
