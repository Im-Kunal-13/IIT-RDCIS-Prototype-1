import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { toast } from "react-toastify";
import Select from "react-select";

export default function MonitoringOffCanvas({ closeBtn }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Tab States.
  const [selectedTab, setSelectedTab] = useState("users");
  const selectedTabCss = { backgroundColor: "rgba(0, 0, 0, 0.150)" };
  // Setting the default icon for the useState
  let iconClass;

  switch (location.pathname.replace("/dashboard/monitoring/", "")) {
    case "analytics":
      iconClass = "activity";
      break;
    case "summary":
      iconClass = "journal-text";
      break;
    case "logs":
      iconClass = "files";
      break;
    default:
      break;
  }
  const [tab, setTab] = useState({
    value: location.pathname.replace("/dashboard/monitoring/", ""),
    label: (
      <p>
        <i className={`bi bi-${iconClass} mr-2`}></i>
        {location.pathname
          .replace("/dashboard/monitoring/", "")[0]
          .toUpperCase() +
          location.pathname.replace("/dashboard/monitoring/", "").slice(1)}
      </p>
    ),
  });

  // Plant dropdown select
  const [plant, setPlant] = useState("Bokaro Steel Plant");
  const [machineName, setMachineName] = useState("Hammer Crusher 28");
  const [monitorName, setMonitorName] = useState("Hammer Crusher 28");

  //   PLANTS SELECT OPTIONS
  const plantOptions = [
    { value: "Durgapur Steel Plant", label: "Durgapur Steel Plant" },
    { value: "Bokaro Steel Plant", label: "Bokaro Steel Plant" },
    { value: "Bhilai Steel Plant", label: "Bhilai Steel Plant" },
    { value: "Burnpur Steel Plant", label: "Burnpur Steel Plant" },
    { value: "RDCIS Ranchi", label: "RDCIS Ranchi" },
  ];

  // TAB SELECT OPTIONS
  const tabOptions = [
    {
      value: "analytics",
      label: (
        <p>
          <i className="bi bi-activity mr-2"></i>Analytics
        </p>
      ),
    },
    {
      value: "summary",
      label: (
        <p>
          <i className="bi bi-journal-text mr-2"></i>Summary
        </p>
      ),
    },
    {
      value: "logs",
      label: (
        <p>
          <i className="bi bi-files mr-2"></i>Logs
        </p>
      ),
    },
  ];

  // MACHINE NAME SELECT OPTIONS
  const machineNameOptions = [
    { value: "Hammer Crusher 28", label: "Hammer Crusher 28" },
    { value: "Hammer Crusher 29", label: "Hammer Crusher 29" },
    { value: "Hammer Crusher 30", label: "Hammer Crusher 30" },
    { value: "Hammer Crusher 31", label: "Hammer Crusher 31" },
    { value: "Hammer Crusher 32", label: "Hammer Crusher 32" },
    { value: "Hammer Crusher 33", label: "Hammer Crusher 33" },
    { value: "Hammer Crusher 34", label: "Hammer Crusher 34" },
    { value: "Hammer Crusher 35", label: "Hammer Crusher 35" },
  ];

  // MONITOR NAME SELECT OPTIONS
  const monitorNameOptions = [
    { value: "HC28-CDE", label: "HC28-CDE" },
    { value: "HC28-CNDE", label: "HC28-CNDE" },
    { value: "HC28-MDE", label: "HC28-MDE" },
    { value: "HC28-MNDE", label: "HC28-MNDE" },
  ];
  // Destructuring data.
  const { admin } = useSelector((state) => state.auth);

  // Tab change function
  const onTabChange = (currentTab) => {
    setTab(currentTab);
    navigate(`/dashboard/monitoring/${currentTab.value}`);
    closeBtn.current.click();
  };

  return (
    <div className="offcanvas-body">
      {/* Summary / Detailed Dashboard  SELECT  */}
      <div className="flex items-center justify-between my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border h-12 shadow transition-all">
        <Select
          value={tab}
          onChange={onTabChange}
          placeholder="Select Tab"
          options={tabOptions}
          className="border-none cursor-pointer text-lg"
          isSearchable={false}
        />
        <FaChevronDown size={".8rem"} />
      </div>
      {/* DIFFERENT PAGES  */}
      <div className="">
        {/* PLANTS TAB */}
        <div
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border shadow cursor-pointer hover:scale-95 transition-all"
          onClick={() => {
            setSelectedTab("plants");
          }}
          style={selectedTab === "plants" ? selectedTabCss : {}}
        >
          <i className="bi bi-building text-lg mr-4"></i>
          <span className="text-lg">Plants</span>
        </div>
        {/* PLANT SELECT  */}
        <div className="flex items-center justify-between my-3 py-2 ml-8 px-3 hover:bg-offCanvasHover rounded-lg border shadow  transition-all h-11 bg-white">
          <Select
            value={plant}
            defaultValue={plant}
            onChange={setPlant}
            placeholder="Select Plant Name"
            options={plantOptions}
            className="border-none cursor-pointer"
          />
          <FaChevronDown size={".8rem"} />
        </div>
        {/* MACHINE NAME TAB */}
        <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border shadow cursor-pointer hover:scale-95 transition-all ">
          <i className="bi bi-motherboard text-lg mr-4"></i>
          <span className="text-lg">Machine Name</span>
        </div>
        {/* MACHINE NAME SELECT  */}
        <div className="flex items-center justify-between my-3 py-2 ml-8 px-3 hover:bg-offCanvasHover rounded-lg border shadow transition-all h-11 ">
          <Select
            value={machineName}
            defaultValue={machineName}
            onChange={setMachineName}
            placeholder="Select Machine Name"
            options={machineNameOptions}
            className="border-none cursor-pointer w-48"
          />
          <FaChevronDown size={".8rem"} />
        </div>
        {/* MONITOR NAME TAB */}
        <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border shadow cursor-pointer hover:scale-95 transition-all">
          <i className="bi bi-clipboard-data text-lg mr-4"></i>
          <span className="text-lg">Monitor Name</span>
        </div>
        {/* MONITOR NAME SELECT  */}
        <div className="flex items-center justify-between my-3 py-2 ml-8 px-3 hover:bg-offCanvasHover rounded-lg border shadow transition-all h-11">
          <Select
            value={monitorName}
            defaultValue={monitorName}
            onChange={setMonitorName}
            placeholder="Select Monitor Name"
            options={monitorNameOptions}
            className="border-none cursor-pointer"
          />
          <FaChevronDown size={".8rem"} />
        </div>
        {/* SMALLER SCREENS  */}
        <div className="md:hidden">
          {/* NOTIFICATIONS TAB  */}
          <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg shadow border cursor-pointer hover:scale-95 transition-all">
            <i className="bi bi-bell text-lg mr-4"></i>
            <span className="text-lg">Notifications</span>
          </div>
          {/* SETTINGS TAB  */}
          <div
            className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg shadow border cursor-pointer hover:scale-95 transition-all"
            id="settings-dropdown-button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-gear text-lg mr-4"></i>
            <span className="text-lg">Settings</span>
          </div>
          {/* SETTINGS DROPDOWN  */}
          <ul
            className="dropdown-menu px-2 shadow"
            aria-labelledby="settings-dropdown-button"
          >
            <li className="py-2 px-2 my-2 bg-offCanvasSelected rounded-md text-base">
              2002kunalmondal13@gmail.com
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-question-square text-lg mr-4"></i>
                <span className="text-lg">Admin Service</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-journals text-lg mr-4"></i>
                <span className="text-lg">Reliability Services</span>
              </div>
            </li>
          </ul>
          {/* PROFILE TAB  */}
          <div
            className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border shadow cursor-pointer hover:scale-95 transition-all"
            id="sign-in-dropdown-button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle text-lg mr-4"></i>
            <span className="text-lg">Profile</span>
          </div>
          {/* ACCOUNT DROPDOWN  */}
          <ul
            className="dropdown-menu px-2 z-20 shadow"
            aria-labelledby="sign-in-dropdown-button"
          >
            <li
              className="p-2 my-2 bg-gray-200 rounded-md text-base cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Copy Email"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(admin?.email);
                toast.success(`Copied to clipboard.`, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  toastId: "loginSucces1",
                });
              }}
            >
              {admin?.email}
            </li>
            <li
              className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target={`#edit-user-self-backdrop`}
            >
              <div className="flex items-center">
                <i
                  className={`bi bi-person${
                    admin?.administrator ? "-check" : ""
                  } text-xl mr-4`}
                ></i>
                <span className="text-lg">Account</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover cursor-pointer">
              <div className="flex items-center">
                <i className="bi bi-question-square text-lg mr-4"></i>
                <span className="text-lg">Support</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover cursor-pointer">
              <div className="flex items-center">
                <i className="bi bi-journals text-lg mr-4"></i>
                <span className="text-lg">Documentation</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover cursor-pointer">
              <div className="flex items-center">
                <i className="bi bi-clock text-lg mr-4"></i>
                <span className="text-lg">Platform Unique</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-red-500 hover:text-white cursor-pointer">
              {/* <!-- Button trigger modal --> */}
              <div
                className="flex items-center"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="bi bi-box-arrow-right text-lg mr-4"></i>
                <span className="text-lg">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
