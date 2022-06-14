import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
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

export default function Sidebar(props) {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  // Getting reference to the button to toggle sidebar expand state.
  const toggleBtn = useRef(null);
  // Sidebar active/deactivate state
  const [sidebarExpand, setSidebarExpand] = useState(false);

  // CSS button hover.
  const btnHoverCss = {
    color: theme.state === "purple" ? "#BA01FF" : "#5473E8",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 2px #fff",
  };

  // Escape key handler function
  const handler = (event) => {
    if (event.shiftKey && event.keyCode === 78) {
      toggleBtn.current.click();
    }
  };

  useEventListener("keydown", handler);

  useEffect(() => {
    setSidebarExpand(false);
  }, [location]);

  return (
    <>
      <div
        className={`${
          sidebarExpand && "active"
        } sidebar rounded-md h-fit fixed z-50 transition-all duration-500 shadow ${
          theme.state === "purple" ? "form-label-purple" : "form-label-blue"
        }`}
      >
        <div className="logo_content">
          <div className="logo text-white flex items-center cursor-pointer transition-all duration-500">
            <img src={require("./iit-logo.png")} alt="" className="w-9" />
            <div className="logo_name font-normal text-xl px-">EyeVib</div>
          </div>
          <span
            onClick={() => {
              setSidebarExpand(!sidebarExpand);
            }}
            ref={toggleBtn}
          >
            <FiLogOut
              id="btn"
              className={`text-base cursor-pointer absolute text-center transition-all duration-500 ${
                theme.state === "purple" ? "btn-purple" : "btn-blue"
              }`}
            />
          </span>
        </div>
        <ul className="nav_list mt-3">
          {/* SEARCH  */}
          <li className="relative list-none w-full transition-all duration-500 ">
            <span
              to="#"
              className="shadow text-white flex items-center transition-all duration-500 cursor-pointer"
              onClick={() => {
                toggleBtn.current.click();
              }}
            >
              <i className="bi bi-search z-10"></i>
              <input
                placeholder="Search..."
                className="absolute l-0 t-0 outline-none border-none text-white h-full w-full rounded-xl text-lg"
              />
            </span>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Search</span>
          </li>
          {/* ANALYTICS  */}
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link
              to="/dashboard/monitoring/analytics"
              style={
                location.pathname.includes("/dashboard/monitoring/analytics")
                  ? btnHoverCss
                  : {}
              }
            >
              <i className="bi bi-bar-chart"></i>
              <span className="links_name">Analytics</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Analytics</span>
          </li>
          {/* SUMMARY  */}
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link
              to="/dashboard/monitoring/summary"
              style={
                location.pathname.includes("/dashboard/monitoring/summary")
                  ? btnHoverCss
                  : {}
              }
            >
              <i className="bi bi-journal-text"></i>
              <span className="links_name">Summary</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Summary</span>
          </li>
          {/* LOGS  */}
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link
              to="/dashboard/monitoring/logs"
              style={
                location.pathname.includes("/dashboard/monitoring/logs")
                  ? btnHoverCss
                  : {}
              }
            >
              <i className="bi bi-files"></i>
              <span className="links_name">Logs</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Logs</span>
          </li>
          {/* CONFIGURATION  */}
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link
              to="/dashboard/configuration"
              style={
                location.pathname.includes("/dashboard/configuration")
                  ? btnHoverCss
                  : {}
              }
            >
              <i className="bi bi-sliders2-vertical"></i>
              <span className="links_name">Configuration</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Configuration</span>
          </li>
          {/* ADMINISTRATION  */}
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link
              to="/dashboard/administration/adminList"
              style={
                location.pathname.includes(
                  "/dashboard/administration/adminList"
                )
                  ? btnHoverCss
                  : {}
              }
            >
              <i className="bi bi-person-rolodex"></i>
              <span className="links_name">Administration</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Administration</span>
          </li>
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link id="userBtn" to="#">
              <i className="bi bi-person"></i>
              <span className="links_name">Profile</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Profile</span>
          </li>
          <li
            className={`relative list-none w-full transition-all duration-500 ${
              theme.state === "purple" ? "tab-purple" : "tab-blue"
            }`}
          >
            <Link to="#" id="settings">
              <i className="bi bi-gear"></i>
              <span className="links_name">Settings</span>
            </Link>
            <span className={`tooltip ${theme.state === 'purple' ? "shadow-themeGlowPurple" : "shadow-themeGlowBlue"}`}>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}
