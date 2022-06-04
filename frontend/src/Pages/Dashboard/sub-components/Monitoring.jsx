import MonitoringOffCanvas from "./MonitoringOffCanvas";
import Analytics from "./Analytics";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

export default function Monitoring() {
  // Tab select and close button
  const tabSelectCloseBtn = useRef(null);

  return (
    <div className="bg-bgGray pt-3 min-h-screen w-full">
      <Outlet />
      {/* OFF CANVAS SKELETON  */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="flex content-between items-center offcanvas-header">
          <div className="flex items-center">
            <img src={require("./iit-logo.png")} alt="" className="w-12 pr-2" />
            <h1 className="font-semibold text-2xl text-white">EyeVib</h1>
          </div>
          <button
            type="button"
            className="flex items-center justify-center transition-all hover:scale-110"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={tabSelectCloseBtn}
          >
            <i className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"></i>
          </button>
        </div>
        <MonitoringOffCanvas closeBtn={tabSelectCloseBtn}/>
      </div>
    </div>
  );
}
