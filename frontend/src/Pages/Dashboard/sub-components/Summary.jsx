import React, { useEffect, useRef, useState, useContext } from "react";
import MaintenanceIndex from "./MaintenanceIndex";
import Draggable from "react-draggable";
// import the react-json-view component
import ReactJson from "react-json-view";
// Importing React Tooltip
import ReactTooltip from "react-tooltip";
import ThemeContext from "../../../context/theme/themeContext"

// Event listener handler function
const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default function Summary() {
  // INITIALIZATIONS
  const theme = useContext(ThemeContext)
  const logCloseBtn = useRef(null);
  const nodeRef = useRef(null);

  // USESTATES
  // State to check if log card should be active.
  const [isLogCardActive, setIsLogCardActive] = useState(false);
  // If active the selected Tab of that
  const [selectedRowTab, setSelectedRowTab] = useState("");
  // Current State of the log Card
  const [summaryCardState, setSummaryCardState] = useState({
    title: "",
  });
  // State to check if the summary card is currently removing.
  const [isSummaryCardRemoving, setIsSummaryCardRemoving] = useState(false);

  // FUNCTIONS
  // Escape key handler function
  const handler = (event) => {
    if (event.keyCode === 27) {
      setIsSummaryCardRemoving(true);
      setTimeout(() => {
        setIsSummaryCardRemoving(false);
        setIsLogCardActive(false);
      }, 1000);
      setSelectedRowTab("");
    }
  };

  useEventListener("keydown", handler);


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
    <div>
      {/* LOG CARD  */}
      {isLogCardActive && (
        <div className="absolute lg:block hidden">
          <Draggable
            nodeRef={nodeRef}
            defaultPosition={{ x: 10, y: 0 }}
          >
            <div
              ref={nodeRef}
              className={`w-96 rounded-md shadow-logCard cursor-pointer sticky z-20 overflow-hidden ${
                isSummaryCardRemoving ? "backward-ping" : "forward-ping"
              }`}
              style={{
                borderBottom: "6px solid #E8EAFB",
                marginLeft: `calc(${window.innerWidth / 2}px - 30rem)`,
                marginTop: `calc(${document.documentElement.scrollTop}px)`,
              }}
            >
              {/* HEADER  */}
              <div className={`flex content-between justify-between items-center px-3 py-2 ${theme.state === 'purple' ? "dashboard-review-purple" : "dashboard-review-blue"}`}>
                <div className="flex items-center">
                  <h1 className="font-semibold text-white text-lg">
                    {summaryCardState.title}
                  </h1>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center transition-all hover:scale-110"
                  data-tip="Esc"
                  aria-label="Close"
                  ref={logCloseBtn}
                  onClick={() => {
                    setIsSummaryCardRemoving(true);
                    setTimeout(() => {
                      setIsSummaryCardRemoving(false);
                      setIsLogCardActive(false);
                    }, 950);
                    setSelectedRowTab("");
                  }}
                >
                  <i className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"></i>
                </button>
                <ReactTooltip
                  place="bottom"
                  effect="solid"
                  border={true}
                  backgroundColor="#1341e825"
                  textColor="black"
                />
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
                  className={`text-white w-fit py-2 rounded-md transition-all hover:scale-x-105 px-2 ${theme.state === 'purple' ? "dashboard-review-purple" : "dashboard-review-blue"}`}
                >
                  <i className="bi bi-download mr-2"></i>
                  Download
                </button>
              </div>
            </div>
          </Draggable>
        </div>
      )}
      <div className="md1:px-4 grid grid-cols-4 gap-4">
        {/* SUMMARY TABLE  */}
        <div className="col-span-4 lg2:col-span-3 ">
          <div
            className="flex flex-col bg-white border-x border-t shadow rounded-lg overflow-hidden"
            style={{ borderBottom: "6px solid #E8EAFB" }}
          >
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block w-full sm:px-6 lg:px-8" style={{minWidth: "815px"}}>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="">
                      <tr className={`${theme.state === 'purple' ? "dashboard-review-purple" : "dashboard-review-blue"}`}>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          <span>Machine</span>
                          <span className="md2:inline hidden"> Name</span>
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          <span>Health</span>
                          <span className="md2:inline"> Score</span>
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          <span>Vibration</span>
                          <span className="md2:inline hidden"> Trend</span>
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          <span>Instantaneous</span>
                          <span className="md2:inline hidden"> Status</span>

                          <i className="bi bi-question-circle-fill ml-2"></i>
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          Health Trend
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-3 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                        >
                          <span>Subscription</span>
                          <span className="md2:inline hidden"> Status</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Hammer Crusher 29",
                        "Hammer Crusher 30",
                        "Hammer Crusher 31",
                        "Hammer Crusher 32",
                        "Hammer Crusher 33",
                        "Hammer Crusher 31",
                        "Hammer Crusher 34",
                        "Hammer Crusher 35",
                      ].map((item, index) => (
                        <tr
                          key={`row${index}`}
                          className={`${
                            index !== 7 && "border-b"
                          } hover:scale-95 transition-all cursor-pointer hover:bg-nav1Hover ${
                            selectedRowTab === `row${index}` &&
                            "bg-nav1Hover scale-95 shadow"
                          } hover:shadow rounded-md`}
                          name={"sss"}
                          onClick={() => {
                            setSummaryCardState((prevState) => ({
                              ...prevState,
                              title: item,
                            }));
                            setIsLogCardActive(true);
                            setSelectedRowTab(`row${index}`);
                          }}
                        >
                          <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            {item}
                          </td>
                          <td className="text-sm text-gray-900 font-semibold px-4 py-4 whitespace-nowrap">
                            NA
                          </td>
                          <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            -
                          </td>
                          <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            <i className="bi bi-record-fill ml-2 text-pieChartGray"></i>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            -
                          </td>
                          <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            111 days
                            <i className="bi bi-record-fill text-infoCardDarkGreen ml-2"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAINTENANCE INDEX  */}
        <div className="col-span-4 sm:col-span-4 lg2:col-span-1">
          <MaintenanceIndex />
        </div>
      </div>
    </div>
  );
}
