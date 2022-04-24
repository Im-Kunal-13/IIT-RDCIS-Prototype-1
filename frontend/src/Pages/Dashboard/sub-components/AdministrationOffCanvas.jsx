import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdministrationOffCanvas() {
  const [selectedTab, setSelectedTab] = useState("users");
  const selectedTabCss = { backgroundColor: "rgba(0, 0, 0, 0.150)" };

  // Plant dropdown select
  const [plant, setPlant] = useState("");

  return (
    <div className="offcanvas-body">
      {/* ORGANIZATION SELECT  */}
      <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg">
        <i className="bi bi-building text-lg mr-4"></i>
        <select
          className="bg-transparent border-none outline-none w-full"
          value={plant}
          onChange={(e) => {
            setPlant(e.target.value);
          }}
        >
          <option>Steel Authority of India</option>
        </select>
      </div>
      {/* DIFFERENT PAGES  */}
      <div className="">
        {/* PLANT SELECT  */}
        <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg">
          <i className="bi bi-ticket-detailed text-lg mr-4"></i>
          <select
            className="bg-transparent border-none outline-none w-full"
            value={plant}
            onChange={(e) => {
              setPlant(e.target.value);
            }}
          >
            {/* Sorting the plant names and displaying them accordingly.  */}
            {["Durgapur", "Borako", "Bhilai", "Burnpur", "RDCIS"]
              .sort()
              .map((item, index) => {
                return (
                  <option key={index} className="text-lg">
                    {item === "RDCIS"
                      ? `${item} Ranchi`
                      : `${item} Steel Plant`}
                  </option>
                );
              })}
          </select>
        </div>
        {/* USERS TAB */}
        <Link
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
          to=""
          onClick={() => {
            setSelectedTab("users");
          }}
          style={selectedTab === "users" ? selectedTabCss : {}}
        >
          <i className="bi bi-people-fill text-lg mr-4"></i>
          <span className="text-lg">Users</span>
        </Link>
        <div className="md:">
          {/* NOTIFICATIONS TAB  */}
          <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg">
            <i className="bi bi-bell text-lg mr-4"></i>
            <span className="text-lg">Notifications</span>
          </div>
          {/* SETTINGS TAB  */}
          <div
            className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
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
            className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
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
            <li className="p-2 my-2 bg-gray-200 rounded-md text-base">
              2002kunalmondal13@gmail.com
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-question-square text-lg mr-4"></i>
                <span className="text-lg">Support</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-journals text-lg mr-4"></i>
                <span className="text-lg">Documentation</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-clock text-lg mr-4"></i>
                <span className="text-lg">Platform Unique</span>
              </div>
            </li>
            <li className="py-2 px-2 my-2 rounded-md hover:bg-red-500 hover:text-white">
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
