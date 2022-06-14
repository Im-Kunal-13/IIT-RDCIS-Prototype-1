import React, { useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import AdministrationOffCanvas from "./AdministrationOffCanvas";
import Users from "./Users";

export default function Administration() {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-full">
      {/* <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/plants" element={<Plants />} />
        </Routes> */}
      <Users />
      {/* OFF CANVAS SKELETON  */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div
          className={`flex content-between items-center offcanvas-header ${
            theme.state === "purple"
              ? "offcanvas-header-purple"
              : "offcanvas-header-blue"
          }`}
        >
          <div className="flex items-center">
            <img src={require("./iit-logo.png")} alt="" className="w-12 pr-2" />
            <h1 className="font-semibold text-2xl text-white">EyeVib</h1>
          </div>
          <button
            type="button"
            className="flex items-center justify-center transition-all hover:scale-110"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"></i>
          </button>
        </div>
        <AdministrationOffCanvas />
      </div>
    </div>
  );
}
