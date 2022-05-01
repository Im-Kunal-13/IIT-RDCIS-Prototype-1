import React from 'react'
import MonitoringOffCanvas from './MonitoringOffCanvas'
import MonitoringTab from './MonitoringTab'

export default function Monitoring() {
  return (
    <div>
      <MonitoringTab />
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
          >
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"
            ></i>
          </button>
        </div>
        <MonitoringOffCanvas />
      </div>
    </div>
  )
}
