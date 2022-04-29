import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdministrationOffCanvas() {
  const [selectedTab, setSelectedTab] = useState("users");
  const selectedTabCss = { backgroundColor: "rgba(0, 0, 0, 0.150)" };

  // Plant dropdown select
  const [plant, setPlant] = useState("");

  // Destructuring data.
  const { admin } = useSelector((state) => state.auth);

  return (
    <div className="offcanvas-body">
      {/* ORGANIZATION SELECT  */}
      <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border h-12 shadow cursor-pointer hover:scale-95 transition-all">
        {/* <i className="bi bi-building text-lg mr-4"></i> */}
        <img
          src={require("./sail-logo-transparent.png")}
          alt=""
          className="w-8 pr-2"
        />
        <div
          className="bg-transparent border-none outline-none w-full"
          value={plant}
          onChange={(e) => {
            setPlant(e.target.value);
          }}
        >
          Steel Authority of India Limited
        </div>
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
        <div className="flex items-center my-3 py-2 ml-8 px-3 hover:bg-offCanvasHover rounded-lg border shadow hover:scale-95 transition-all">
          <i className="bi bi-ticket-detailed text-lg mr-4"></i>
          <select
            className="bg-transparent border-none outline-none w-full cursor-pointer"
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
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg border shadow hover:scale-95 transition-all"
          to="/dashboard/administration/adminList"
          onClick={() => {
            setSelectedTab("users");
          }}
          style={selectedTab === "users" ? selectedTabCss : {}}
        >
          <i className="bi bi-people-fill text-lg mr-4"></i>
          <span className="text-lg">Users</span>
        </Link>
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
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </div>
  );
}
