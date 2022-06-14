import React, { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import InfoCard from "./InfoCard";
import { useSelector, useDispatch } from "react-redux";
import logSlice, { getLogs, reset } from "../../../features/logs/logSlice";
import Draggable from "react-draggable";
// import the react-json-view component
import ReactJson from "react-json-view";
// Importing React Tooltip
import ReactTooltip from "react-tooltip";
import ThemeContext from "../../../context/theme/themeContext";

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

export default function Logs() {
  // INITIALIZATIONS
  const theme = useContext(ThemeContext);
  // For Dispatching.
  const dispatch = useDispatch();
  // Taking out variables from the state.
  const { logs, logError, logSuccess, logIsLoading, logMessage } = useSelector(
    (state) => state.logs
  );
  const logCloseBtn = useRef(null);
  const nodeRef = useRef(null);
  const intervalStateOptions = [
    { value: "Today", label: "Today" },
    { value: "Last 7 days", label: "Last 7 days" },
    { value: "Last 1 month", label: "Last 1 year" },
    { value: "Last year", label: "Last year" },
    { value: "All", label: "All" },
  ];
  // Stages and Status object.
  const logStages = [
    {
      data: [
        {
          label: "Detection",
          state: "failed",
        },
      ],
    },
    {
      data: [
        {
          label: "Execution",
          state: "success",
        },
      ],
    },
    {
      data: [
        {
          label: "Onboarding",
          state: "pending",
        },
      ],
    },
    {
      data: [
        {
          label: "Detection",
          state: "success",
        },
      ],
    },
    {
      data: [
        {
          label: "Execution",
          state: "caution",
        },
      ],
    },
    {
      data: [
        {
          label: "Detection",
          state: "failed",
        },
      ],
    },
    {
      data: [
        {
          label: "Execution",
          state: "pending",
        },
      ],
    },
    {
      data: [
        {
          label: "Onboarding",
          state: "caution",
        },
      ],
    },
  ];

  // STATES
  const [intervalState, setIntervalState] = useState({
    value: "Last 7 days",
    label: "Last 7 days",
  });
  // If active the selected Tab of that
  const [selectedRowTab, setSelectedRowTab] = useState("");
  // Current State of the log Card
  const [summaryCardState, setSummaryCardState] = useState({
    title: "",
  });
  // State to check if the summary card is currently removing.
  const [isSummaryCardRemoving, setIsSummaryCardRemoving] = useState(false);
  // State to check if log card should be active.
  const [isLogCardActive, setIsLogCardActive] = useState(false);

  const colorStyles = {
    option: (styles, { isFocused, isSelected, isActive }) => ({
      ...styles,
      background:
        isFocused & !isSelected
          ? `${
              theme.state === "purple"
                ? "rgb(187, 1, 255, .2)"
                : "rgb(1, 95, 243, .2);"
            }`
          : isSelected
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : isActive
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : undefined,
      zIndex: 1,
    }),
  };

  // FUNCTIONS
  // Escape key handler function
  const handler = (event) => {
    if (event.keyCode === 27) {
      setIsSummaryCardRemoving(true);
      setSelectedRowTab("");
      setTimeout(() => {
        setIsSummaryCardRemoving(false);
        setIsLogCardActive(false);
      }, 1000);
    }
  };

  useEventListener("keydown", handler);

  // Demo js object
  const logObject = {
    data_id: "628659c3daf74e9b2cd22ec0",
    log_id: "628659c7daf74e9b2cd22ec4",
    timestamp: "21-5-2022 2:32:46",
    machine: "Hammer Crusher 29",
    monitor: "HC29-CDE",
    feature: "Angular Misalignment",
    value: "7.050494",
    stage: "Detection",
    status: "Warning",
  };

  // Loading the admins on useEffect.
  useEffect(() => {
    if (logError) {
      console.log(logMessage);
    }

    // Getting all the logs
    dispatch(getLogs());

    console.log(logs);
  }, [logError, logMessage, dispatch]);

  return (
    <div>
      {/* LOG CARD  */}
      {isLogCardActive && (
        <div className="absolute z-30 lg:block hidden">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className={`w-96 rounded-md shadow-logCard cursor-pointer overflow-hidden ${
                isSummaryCardRemoving ? "backward-ping" : "forward-ping"
              }`}
              style={{
                borderBottom: "6px solid #E8EAFB",
                marginLeft: `calc(${window.innerWidth / 2}px - 30rem)`,
                marginTop: `calc(${document.documentElement.scrollTop}px)`,
              }}
              //   style={{ opacity: Opacity ? "0.6" : "1" }}
            >
              {/* HEADER  */}
              <div
                className={`flex content-between justify-between items-center px-3 py-2 ${
                  theme.state === "purple"
                    ? "dashboard-review-purple"
                    : "dashboard-review-blue"
                }`}
              >
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
                src={logObject}
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
                  className={`text-white w-fit py-2 rounded-md transition-all hover:scale-x-105 px-2 ${
                    theme.state === "purple"
                      ? "dashboard-review-purple"
                      : "dashboard-review-blue"
                  }`}
                >
                  <i className="bi bi-download mr-2"></i>
                  Download
                </button>
              </div>
            </div>
          </Draggable>
        </div>
      )}
      {/* LOGS-HEADER-TAB */}
      <div className="py-2 px-3 bg-white rounded-lg shadow border mb-3 mx-3 sticky-top top-20 z-20 transition-all">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Logs</h1>
          {/* CONTROLS  */}
          <div className="items-center hidden md:flex">
            {/* SEARCH  */}
            <i
              className={`bi bi-search text-2xl mr-5 hover:bg-opacity-30 shadow border px-3 py-2 rounded-lg hover:scale-110 transition-all cursor-pointer ${
                theme.state === "purple"
                  ? "hover:bg-themeBlue1"
                  : "hover:bg-lightBlue2"
              }`}
            ></i>
            {/* COLUMNS  */}
            <div className="dropdown mr-5">
              <div
                id="settings-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className={`flex items-center px-2 border shadow hover:scale-95 transition-all cursor-pointer hover:bg-opacity-30 rounded-md ${
                  theme.state === "purple"
                    ? "hover:bg-themeBlue1"
                    : "hover:bg-lightBlue2"
                }`}
              >
                <i className="bi bi-eye text-2xl p-2" type="button"></i>
                <p className="font-semibold text-lg">
                  4 columns
                  <span className="font-normal mr-5"> hidden</span>
                </p>
                <FaChevronDown size={".8rem"} />
              </div>
              {/* GRID DROPDOWN  */}
              <ul
                className="dropdown-menu px-2 w-52 shadow"
                aria-labelledby="settings-dropdown-button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <li
                  className={`py-2 px-2 my-2 rounded-md text-base bg-opacity-20 ${
                    theme.state === "purple" ? "bg-themeBlue1" : "bg-lightBlue2"
                  }`}
                >
                  <pre>Show Columns </pre>
                </li>
                {/* Machine Name  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="email-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="email-column-checkbox"
                    >
                      Machine Name
                    </label>
                  </div>
                </li>
                {/* Monitor Name  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="organization-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="organization-column-checkbox"
                    >
                      Monitor Name
                    </label>
                  </div>
                </li>
                {/* Data ID  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="name-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="name-column-checkbox"
                    >
                      Data ID
                    </label>
                  </div>
                </li>
                {/* Feature  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="phone-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="phone-column-checkbox"
                    >
                      Feature
                    </label>
                  </div>
                </li>
                {/* Value  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="administrator-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="administrator-column-checkbox"
                    >
                      Value
                    </label>
                  </div>
                </li>
                {/* Timestamp  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="administrator-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="administrator-column-checkbox"
                    >
                      Timestamp
                    </label>
                  </div>
                </li>
                {/* Stages  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="administrator-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="administrator-column-checkbox"
                    >
                      Stages
                    </label>
                  </div>
                </li>
                {/* Status  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${
                      theme.state === "purple"
                        ? "checkbox-purple"
                        : "checkbox-blue"
                    }
                      `}
                      type="checkbox"
                      id="administrator-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="administrator-column-checkbox"
                    >
                      Status
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/* INTERVAL */}
            <div
              className={`flex items-center justify-between mr-5 py-2 px-2 hover:scale-95 rounded-md h-12 shadow border transition-all hover:bg-opacity-30 ${
                theme.state === "purple"
                  ? "hover:bg-themeBlue1"
                  : "hover:bg-lightBlue2"
              }`}
            >
              <i className="bi bi-funnel text-2xl p-2" type="button"></i>
              <Select
                value={intervalState}
                onChange={setIntervalState}
                placeholder="Select Interval"
                styles={colorStyles}
                options={intervalStateOptions}
                className="border-none cursor-pointer text-lg"
              />
              <FaChevronDown size={".8rem"} className="relative right-2" />
            </div>
            {/* DOWNLOAD */}
            <div className="dropdown mr-5">
              <i
                className={`bi bi-cloud-arrow-down text-2xl shadow border px-3 py-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
                  theme.state === "purple"
                    ? "hover:bg-themeBlue1"
                    : "hover:bg-lightBlue2"
                }`}
                type="button"
                id="sign-in-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              {/* ACCOUNT DROPDOWN  */}
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="sign-in-dropdown-button"
              >
                <li className="py-2 px-2 my-2 bg-offCanvasSelected rounded-md text-base">
                  2002kunalmondal13@gmail.com
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-question-square text-lg mr-4"></i>
                    <span className="text-lg">Support</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-journals text-lg mr-4"></i>
                    <span className="text-lg">Documentation</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-clock text-lg mr-4"></i>
                    <span className="text-lg">Platform Unique</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-box-arrow-right text-lg mr-4"></i>
                    <span className="text-lg">Logout</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* UPLOAD */}
            <div className={`dropdown`}>
              <i
                className={`bi bi-cloud-arrow-up text-2xl shadow border px-3 py-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
                  theme.state === "purple"
                    ? "hover:bg-themeBlue1"
                    : "hover:bg-lightBlue2"
                }`}
                type="button"
                id="sign-in-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              {/* ACCOUNT DROPDOWN  */}
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="sign-in-dropdown-button"
              >
                <li className="py-2 px-2 my-2 bg-offCanvasSelected rounded-md text-base">
                  2002kunalmondal13@gmail.com
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-question-square text-lg mr-4"></i>
                    <span className="text-lg">Support</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-journals text-lg mr-4"></i>
                    <span className="text-lg">Documentation</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-clock text-lg mr-4"></i>
                    <span className="text-lg">Platform Unique</span>
                  </div>
                </li>
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                  <div className="flex items-cente">
                    <i className="bi bi-box-arrow-right text-lg mr-4"></i>
                    <span className="text-lg">Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* SMALLER SCREENS  */}
          <div className="md:hidden">
            {/* SEARCH  */}
            <i
              className="bi bi-search text-xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
              type="button"
            ></i>
            {/* CREATE NEW USER  */}

            {/* Grid icon  */}
            <i
              className="bi bi-grid-3x3-gap text-2xl hover:bg-nav1Hover p-2 rounded-lg transition-all hover:scale-110"
              type="button"
              id="usergrid-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            {/* grid dropdown  */}
            <ul
              className="dropdown-menu px-2 shadow"
              aria-labelledby="usergrid-dropdown-button"
            >
              {/* Filter Columns  */}
              <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                <div className="flex items-center">
                  <i className="bi bi-layout-three-columns text-lg mr-4"></i>
                  <span className="text-lg">Filter Columns</span>
                </div>
              </li>
              {/* Filter Tables  */}
              <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                <div className="flex items-center">
                  <i className="bi bi-filter text-lg mr-4"></i>
                  <span className="text-lg">Filter Tables</span>
                </div>
              </li>
              {/* Download  */}
              <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
                <div className="flex items-center">
                  <i className="bi bi-cloud-arrow-down text-lg mr-4"></i>
                  <span className="text-lg">Download</span>
                </div>
              </li>
              {/* Upload  */}
              <li className="py-2 px-2 my-2 rounded-md hover:bg-blue-200">
                <div className="flex items-center">
                  <i className="bi bi-cloud-arrow-up text-lg mr-4"></i>
                  <span className="text-lg">Upload</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* INFO CARDS SECTION  */}
      <div
        className="grid grid-cols-4 xl2:gap-5 md:gap-4 col-span-4 mx-3"
        style={{ marginBottom: "3.5rem" }}
      >
        <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
          <InfoCard
            title={"Total Alarms"}
            value={`14`}
            percent={`-11.7`}
            mode={"decrement"}
            increment={false}
            delay="0s"
          />
        </div>
        <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
          <InfoCard
            title={"Alarms Closed"}
            value={`6`}
            percent={`+22.7`}
            mode={"increment"}
            increment={true}
            delay=".3s"
          />
        </div>
        <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full  md:mb-0 mb-14">
          <InfoCard
            title={"False Alarms Set"}
            value={`2`}
            percent={`+10.3`}
            mode={"info"}
            increment={true}
            delay=".6s"
          />
        </div>
        <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full">
          <InfoCard
            title={"Alarms Forecast"}
            value={`6`}
            percent={`+19.7`}
            mode={"forecast"}
            forecast={true}
            increment={true}
            delay=".9s"
          />
        </div>
      </div>
      {/* LOGS TABLE  */}
      <div
        className="flex flex-col bg-white border-x border-t shadow rounded-lg overflow-hidden mx-3 mb-3"
        style={{ borderBottom: "6px solid #E8EAFB" }}
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="">
                  <tr
                    className={`${
                      theme.state === "purple"
                        ? "dashboard-review-purple"
                        : "dashboard-review-blue"
                    }`}
                  >
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Machine</span>
                      <span className="lg3:inline hidden"> Name</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Monitor</span>
                      <span className="lg3:inline hidden"> Name</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Data ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Feature
                      <i className="bi bi-question-circle-fill ml-2"></i>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Value
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Timestamp
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Stages
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      machine: "Hammer Crusher 29",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 30",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 31",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 32",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 33",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 34",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 35",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
                    {
                      machine: "Hammer Crusher 36",
                      monitor: "HC28-CDE",
                      id: "628659f2daf74e9b2cd22ee0",
                      feature: "Angular Misalignment",
                      timestamp: "22-5-2022 5:31:46",
                      value: "7.050494",
                    },
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
                          title: item.machine,
                        }));
                        setIsLogCardActive(true);
                        setSelectedRowTab(`row${index}`);
                      }}
                    >
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.machine}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {item.monitor}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.id}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.feature}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.value}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.timestamp}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                        {logStages[index].data.map((data, index) => {
                          let bgClass;
                          let textClass;
                          let iconClass;

                          switch (data.state) {
                            case "failed":
                              bgClass = "bg-infoCardLightRed";
                              textClass = "text-infoCardDarkRed";
                              iconClass = "exclamation-circle";
                              break;
                            case "success":
                              bgClass = "bg-infoCardLightGreen";
                              textClass = "text-infoCardDarkGreen";
                              iconClass = "check-circle";
                              break;
                            case "pending":
                              bgClass = `bg-opacity-20 ${
                                theme.state === "purple"
                                  ? "bg-themeBlue1"
                                  : "bg-lightBlue2"
                              }`;
                              textClass = `${
                                theme.state === "purple"
                                  ? "text-themeBlue1"
                                  : "text-lightBlue2"
                              }`;
                              iconClass = "clock-history";
                              break;
                            case "caution":
                              bgClass = "bg-yellow-100";
                              textClass = "text-infoCardDarkYellow";
                              iconClass = "clock-history";
                              break;
                            default:
                              break;
                          }
                          return (
                            <div
                              key={index}
                              className={`flex ${bgClass} ${textClass} text-xs p-2 rounded-md shadow font-semibold my-2`}
                            >
                              <i className={`bi bi-${iconClass} mr-2`}></i>
                              {data.label.toUpperCase()}
                            </div>
                          );
                        })}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                        {logStages[index].data.map((data, index) => {
                          let bgClass;
                          let text;

                          switch (data.state) {
                            case "failed":
                              bgClass = "bg-infoCardDarkRed";
                              text = "FAILED";
                              break;
                            case "success":
                              bgClass = "bg-infoCardDarkGreen";
                              text = "PASSED";
                              break;
                            case "pending":
                              bgClass = `${
                                theme.state === "purple"
                                  ? "bg-themeBlue1"
                                  : "bg-lightBlue2"
                              }`;
                              text = "PENDING";
                              break;
                            case "caution":
                              bgClass = "bg-infoCardDarkYellow";
                              text = "CAUTION";
                              break;
                            default:
                              break;
                          }
                          return (
                            <div
                              key={index}
                              className={`flex ${bgClass} text-white text-xs p-2 rounded-md shadow font-semibold my-2 justify-center`}
                            >
                              {/* <i className={`bi bi-${iconClass} mr-2`}></i> */}
                              <p className="mx-2">{text}</p>
                            </div>
                          );
                        })}
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
  );
}
