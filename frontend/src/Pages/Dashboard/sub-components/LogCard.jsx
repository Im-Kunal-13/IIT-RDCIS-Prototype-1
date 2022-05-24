import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
// import the react-json-view component
import ReactJson from "react-json-view";

export default function LogCard() {
  const logCloseBtn = useRef(null);
  const nodeRef = useRef(null);

  // State to check if log card should be active.
  const [isLogCardActive, setIsLogCardActive] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 50, y: 50 });

  const [Opacity, setOpacity] = useState(false);
  const [Opacity2, setOpacity2] = useState(false);

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const trackPos2 = (data) => {
    setPosition2({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  const handleStart2 = () => {
    setOpacity2(true);
  };
  const handleEnd2 = () => {
    setOpacity2(false);
  };

  // Demo js object
  const summaryObject = {
    id: "628659c3daf74e9b2cd22ec0",
    timestamp: "21-5-2022 2:32:46",
    monitors: [
      {
        name: "HC29-CDE",
        observation: "Spectrum Data not available in the given time frame",
        diagnostic: "-",
        recommendation: "Server code needs to be debugged and restarted",
        health_score: "Not applicable",
        vibration_trend: "No rise",
        instantaneousStatus: "-",
        healthTrend: "-",
        subscriptionStatus: "111 days",
      },
      {
        name: "HC29-CNDE",
        observation: "Spectrum Data not available in the given time frame",
        diagnostic: "-",
        recommendation: "Server code needs to be debugged and restarted",
        health_score: "Not applicable",
        vibration_trend: "No rise",
        instantaneousStatus: "-",
        healthTrend: "-",
        subscriptionStatus: "111 days",
      },
      {
        name: "HC29-MDE",
        observation: "Spectrum Data not available in the given time frame",
        diagnostic: "-",
        recommendation: "Server code needs to be debugged and restarted",
        health_score: "Not applicable",
        vibration_trend: "No rise",
        instantaneousStatus: "-",
        healthTrend: "-",
        subscriptionStatus: "111 days",
      },
      {
        name: "HC29-MNDE",
        observation: "Spectrum Data not available in the given time frame",
        diagnostic: "-",
        recommendation: "Server code needs to be debugged and restarted",
        health_score: "Not applicable",
        vibration_trend: "No rise",
        instantaneousStatus: "-",
        healthTrend: "-",
        subscriptionStatus: "111 days",
      },
    ],
  };

  return (
    <div className="absolute">
      {isLogCardActive && (
        <Draggable
          nodeRef={nodeRef}
          onDrag={(e, data) => trackPos(data)}
          onStart={handleStart}
          onStop={handleEnd}
          defaultPosition={{ x: 60, y: 0 }}
        >
          <div
            ref={nodeRef}
            className="w-96 rounded-md border-x border-t shadow cursor-pointer sticky z-20 overflow-hidden"
            style={{ borderBottom: "6px solid #E8EAFB" }}
            //   style={{ opacity: Opacity ? "0.6" : "1" }}
          >
            {/* HEADER  */}
            <div className="flex content-between justify-between items-center dashboard-review px-3 py-1">
              <div className="flex items-center">
                <h1 className="font-semibold text-white text-lg">
                  Hammer Crusher 29
                </h1>
              </div>
              <button
                type="button"
                className="flex items-center justify-center transition-all hover:scale-110"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ref={logCloseBtn}
              >
                <i className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"></i>
              </button>
            </div>
            {/* BODY  */}
            <ReactJson
              src={summaryObject}
              iconStyle="triangle"
              enableClipboard={false}
              style={{
                backgroundColor: "white",
                padding: ".5rem .75rem .5rem .75rem",
                maxHeight: "20rem",
                overflowY: "scroll",
                cursor: "pointer",
              }}
            />
            {/* DOWNLOAD  */}
            <div className="flex justify-end bg-white border-t-2 py-1 px-3 cursor-default">
              <button
                type="submit"
                className="text-white w-fit py-2 rounded-md transition-all hover:scale-x-105 px-2 dashboard-review"
              >
                <i className="bi bi-download mr-2"></i>
                Download
              </button>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}
