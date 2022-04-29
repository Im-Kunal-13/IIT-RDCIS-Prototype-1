import React, { useState } from "react";
import UsersColumnContext from "./usersColumnContext";

const UsersColumnState = (props) => {
  const [state, setState] = useState({
    email: true,
    organization: true,
    name: true,
    phone: true,
    administrator: true,
  });
  const update = async (updatedState) => {
    await setState(updatedState);
  };
  return (
    <UsersColumnContext.Provider value={{ state, update }}>
      {props.children}
    </UsersColumnContext.Provider>
  );
};

export default UsersColumnState;
