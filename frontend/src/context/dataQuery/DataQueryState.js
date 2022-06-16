import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataQueryContext from "./dataQueryContext";

const DataQueryState = (props) => {
  // Importing admin information.
  const { admin } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    plant: admin?.organization,
    machine: "Hammer Crusher 28",
    monitor: "HC28-CDE",
  });

  const update = (label, value) => {
    switch (label) {
      case "plant":
        setState({ ...state, plant: value });
        break;

      case "machine":
        setState({ ...state, machine: value });
        break;

      case "monitor":
        setState({ ...state, monitor: value });
        break;

      default:
        break;
    }
  };

  return (
    <DataQueryContext.Provider value={{ state, update }}>
      {props.children}
    </DataQueryContext.Provider>
  );
};

export default DataQueryState;
