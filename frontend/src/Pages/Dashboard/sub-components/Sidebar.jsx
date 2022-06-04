import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar(props) {
  const location = useLocation();
  // Sidebar active/deactivate state
  const [sidebarExpand, setSidebarExpand] = useState(false);

  // CSS button hover.
  const btnHoverCss = {
    color: "#5473E8",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 2px #fff",
  };

  useEffect(() => {
    setSidebarExpand(false);
  }, [location]);

  return (
    <>
      <div
        className={`${
          sidebarExpand && "active"
        } sidebar rounded-md h-fit form-labels`}
      >
        <div className="logo_content">
          <div className="logo">
            <img src={require("./iit-logo.png")} alt="" className="w-9" />
            <div className="logo_name">EyeVib</div>
          </div>
          <FiLogOut
            onClick={() => {
              setSidebarExpand(!sidebarExpand);
            }}
            id="btn"
            className={`text-base cursor-pointer`}
          />
        </div>
        <ul className="nav_list">
          <li>
            <Link to="#" className="shadow">
              <i className="bi bi-search z-10"></i>
              <input placeholder="Search..." />
            </Link>
            <span className="tooltip">Search</span>
          </li>
          {/* ANALYTICS  */}
          <li>
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
            <span className="tooltip">Analytics</span>
          </li>
          {/* SUMMARY  */}
          <li>
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
            <span className="tooltip">Summary</span>
          </li>
          {/* LOGS  */}
          <li>
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
            <span className="tooltip">Logs</span>
          </li>
          {/* CONFIGURATION  */}
          <li>
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
            <span className="tooltip">Configuration</span>
          </li>
          {/* ADMINISTRATION  */}
          <li>
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
            <span className="tooltip">Administration</span>
          </li>
          <li>
            <Link id="userBtn" to="#">
              <i className="bi bi-person"></i>
              <span className="links_name">Profile</span>
            </Link>
            <span className="tooltip">Profile</span>
          </li>
          <li>
            <Link to="#" id="settings">
              <i className="bi bi-gear"></i>
              <span className="links_name">Settings</span>
            </Link>
            <span className="tooltip">Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}
