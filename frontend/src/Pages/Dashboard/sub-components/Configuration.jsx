import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
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

export default function Configuration() {
  const theme = useContext(ThemeContext);
  // Getting the admin from the user State.
  const { admin } = useSelector((state) => state.auth);
  // If active the selected Tab of that
  const [selectedRowTab, setSelectedRowTab] = useState("");

  // FUNCTIONS
  // Escape key handler function
  const handler = (event) => {
    if (event.keyCode === 27) {
      // setIsSummaryCardRemoving(true);
      // setTimeout(() => {
      //   setIsSummaryCardRemoving(false);
      //   setIsLogCardActive(false);
      // }, 1000);
      setSelectedRowTab("");
    }
  };

  useEventListener("keydown", handler);
  return (
    <div className="py-3 bg-bgGray w-full">
      {/* CONFIGURATION TAB  */}
      <div className="py-2 px-3 bg-white rounded-lg shadow border mb-3 mx-3 sticky-top top-20 z-0">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Monitoring Locations</h1>
          {/* CONTROLS  */}
          <div className="items-center hidden md:flex">
            {/* SEARCH  */}
            <i
              className={`bi bi-search text-2xl mr-7 p-2 rounded-lg hover:scale-110 transition-all cursor-pointer hover:bg-opacity-30 ${
                theme.state === "purple"
                  ? "hover:bg-themeBlue1"
                  : "hover:bg-lightBlue2"
              }`}
            ></i>
            {/* COLUMNS  */}
            <div className="dropdown mr-7">
              <i
                className={`bi bi-layout-three-columns text-2xl p-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
                  theme.state === "purple"
                    ? "hover:bg-themeBlue1"
                    : "hover:bg-lightBlue2"
                }`}
                type="button"
                id="settings-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
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
                {/* MONITORING LOCATIONS  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 border-no
                    ${theme.state === "purple" ? "checkbox-purple" : "checkbox-blue"}
                    }`}
                      type="checkbox"
                      id="email-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="email-column-checkbox"
                    >
                      Locations
                    </label>
                  </div>
                </li>
                {/* TYPE  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 
                      ${theme.state === "purple" ? "checkbox-purple" : "checkbox-blue"}
                      `}
                      type="checkbox"
                      id="organization-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="organization-column-checkbox"
                    >
                      Type
                    </label>
                  </div>
                </li>
                {/* Device  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 border-n
                    ${theme.state === "purple" ? "checkbox-purple" : "checkbox-blue"}
                    }`}
                      type="checkbox"
                      id="name-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="name-column-checkbox"
                    >
                      Device
                    </label>
                  </div>
                </li>
                {/* Machine Name  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5 border-no
                    ${theme.state === "purple" ? "checkbox-purple" : "checkbox-blue"}
                    }`}
                      type="checkbox"
                      id="phone-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="phone-column-checkbox"
                    >
                      Machine Name
                    </label>
                  </div>
                </li>
                {/* Operation  */}
                <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      className={`form-check-input  cursor-pointer mr-3 h-5 w-5
                      ${theme.state === "purple" ? "checkbox-purple" : "checkbox-blue"}
                      `}
                      type="checkbox"
                      id="administrator-column-checkbox"
                    />
                    <label
                      className="text-lg cursor-pointer"
                      htmlFor="administrator-column-checkbox"
                    >
                      Operation
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/* TABLE */}
            <div className="dropdown mr-7">
              <i
                className={`bi bi-filter text-2xl p-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
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
            {/* DOWNLOAD */}
            <div className="dropdown mr-7">
              <i
                className={`bi bi-cloud-arrow-down text-2xl p-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
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
            <div className={`dropdown mr-7`}>
              <i
                className={`bi bi-cloud-arrow-up text-2xl p-2 rounded-lg hover:scale-110 transition-all hover:bg-opacity-30 ${
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
            {admin?.administrator ? (
              <div
                className={`flex items-center px-3 py-2 border-2 rounded-md hover:scale-105 transition-all cursor-pointer shadow hover:bg-opacity-30 ${
                  theme.state === "purple"
                    ? "hover:bg-themeBlue1"
                    : "hover:bg-lightBlue2"
                }`}
                data-bs-toggle="modal"
                // data-bs-target="#register-user-backdrop"
              >
                <i className="bi bi-plus-lg mr-2 text-xl"></i>
                <span className="text-lg">Create New</span>
              </div>
            ) : (
              <div className="flex items-center px-3 py-2 border-2 rounded-md bg-offCanvasHover transition-all shadow">
                <i className="bi bi-plus-lg mr-2 text-xl"></i>
                <span className="text-lg">Create New</span>
              </div>
            )}
          </div>
          {/* SMALLER SCREENS  */}
          <div className="md:hidden">
            {/* SEARCH  */}
            <i
              className="bi bi-search text-xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
              type="button"
            ></i>
            {/* CREATE NEW USER  */}
            {admin?.administrator ? (
              <i
                className="bi bi-plus text-2xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#register-user-backdrop"
              ></i>
            ) : (
              <i
                className="bi bi-plus text-2xl p-2 rounded-lg md:hidden transition-all mr-2"
                type="button"
              ></i>
            )}

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
      {/* MONITORING LOCATIONS TABLE  */}
      <div
        className="flex flex-col bg-white border-x border-t shadow rounded-lg overflow-hidden mx-3"
        style={{ borderBottom: "6px solid #E8EAFB" }}
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            className="inline-block w-full sm:px-6 lg:px-8"
            style={{ minWidth: "1085px" }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="">
                  <tr className={`${
                      theme.state === "purple"
                        ? "dashboard-review-purple"
                        : "dashboard-review-blue"
                    }`}>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Monitoring</span>
                      <span className="lg1:inline hidden"> Locations</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Type </span>
                      <i className="bi bi-question-circle-fill ml-2"></i>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Device</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Machine</span>
                      <span className="lg1:inline hidden"> Name</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Operation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      location: "HC28-CDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:EB:2B",
                      machine: "Hammer Crusher 28",
                      operation: "X-Axial, Y-Vertical, Z-Horizontal",
                    },
                    {
                      location: "HC28-CNDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:33:OD",
                      machine: "Hammer Crusher 28",
                      operation: "X-Axial, Y-Vertical, Z-Horizontal",
                    },
                    {
                      location: "HC28-MDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:53:98",
                      machine: "Hammer Crusher 28",
                      operation: "X-Axial, Y-Horizontal, Z-Vertical",
                    },
                    {
                      location: "HC28-MNDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:43:42",
                      machine: "Hammer Crusher 28",
                      operation: "X-Axial,  Y-Horizontal, Z-Vertical",
                    },
                    {
                      location: "HC28-CDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:52:C2",
                      machine: "Hammer Crusher 29",
                      operation: "X-Axial, Y-Vertical, Z-Horizontal",
                    },
                    {
                      location: "HC28-CNDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:33:14",
                      machine: "Hammer Crusher 29",
                      operation: "X-Axial, Y-Vertical, Z-Horizontal",
                    },
                    {
                      location: "HC28-MDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:33:17",
                      machine: "Hammer Crusher 29",
                      operation: "X-Axial, Y-Horizontal, Z-Vertical",
                    },
                    {
                      location: "HC28-MNDE",
                      type: "With Diagnostic Faults",
                      device: "94:54:93:4A:33:18",
                      machine: "Hammer Crusher 29",
                      operation: "X-Axial, Y-Horizontal, Z-Vertical",
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
                      onClick={() => {
                        // setSummaryCardState((prevState) => ({
                        //   ...prevState,
                        //   title: item,
                        // }));
                        // setIsLogCardActive(true);
                        setSelectedRowTab(`row${index}`);
                      }}
                    >
                      <td className="text-sm text-gray-900 font-semibold px-4 py-4 whitespace-nowrap">
                        {item.location}
                      </td>
                      <td className="text-sm text-gray-900 font-normal px-4 py-4 whitespace-nowrap">
                        {item.type}
                      </td>
                      <td className={`text-sm font-normal px-4 py-4 whitespace-nowrap ${theme.state === 'purple' ? "text-themeViolet1" : "text-lightBlue2"}`}>
                        <span className="hover:underline">{item.device}</span>
                      </td>
                      <td className={`text-sm font-normal px-4 py-4 whitespace-nowrap ${theme.state === 'purple' ? "text-themeViolet1" : "text-lightBlue2"}`}>
                        <span className="hover:underline">{item.machine}</span>
                      </td>
                      <td
                        className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap flex items-center justify-between"
                        style={{ maxHeight: "70px" }}
                      >
                        <span>{item.operation}</span>
                        <span className="flex items-center">
                          <i
                            className={`bi bi-pen-fill mr-2 text-lg hover:bg-nav1Hover py-2.5 px-3 rounded-full transition-all hover:scale-105 shadow ${theme.state === 'purple' ? "text-themeBlue1" : "text-lightBlue2"}`}
                            type="button"
                            // data-bs-toggle="modal"
                            // data-bs-target={`#update-user-${
                            //   index + "-large-"
                            // }-backdrop`}
                          />
                          <button className="hover:bg-nav1Hover py-3 px-3 rounded-full shadow transition-all hover:scale-105">
                            <FaTrash
                              size={"1.05rem"}
                              color="#FF0022"
                              className=""
                            />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* OFF CANVAS SKELETON  */}
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
  );
}
