import React, { useState } from "react";
import ThemeContext from "./themeContext";

const ThemeState = (props) => {
  const [state, setState] = useState("light");
  const update = async() => {
    await setState(state === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{state, update}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
