import React, { useState } from "react";
import UsersColumnContext from "./usersColumnContext";

const ThemeState = (props) => {
  const [state, setState] = useState({
    email: true,
    organization: true,
    name: true,
    phone: true,
    administrator: true,
  });
  const update = async () => {
    await setState(state === "light" ? "dark" : "light");
  };
  return (
    <UsersColumnContext.Provider value={{ state, update }}>
      {props.children}
    </UsersColumnContext.Provider>
  );
};

export default ThemeState;
