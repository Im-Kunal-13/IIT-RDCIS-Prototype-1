import React from 'react'

export default function Configuration() {
  return (
    <div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="flex content-between items-center offcanvas-header">
            <div className="flex items-center">
              <i className="bi bi-xbox text-3xl pr-2"></i>
              <h1 className="font-semibold text-2xl">Untitled UI</h1>
            </div>
            <button
              type="button"
              className="flex items-center justify-center"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="bi bi-x-lg text-2xl py-1 px-2 hover:text-white hover:bg-nav2Hover rounded-lg"></i>
            </button>
          </div>
          {/* OFF CANVAS BODY  */}
        </div>
    </div>
  )
}
