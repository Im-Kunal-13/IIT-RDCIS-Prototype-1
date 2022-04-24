import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminList from "./AdminList";
import RegisterAdmin from "./RegisterAdmin";

export default function Users() {
  const [registerActive, setRegisterActive] = useState(false);

  const registerActiveCss = { display: "none" };
  return (
    <div className="py-3 px-4">
      {/* HEADER  */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Users</h1>
        {/* CONTROLS  */}
        <div className="items-center hidden md:flex">
          {/* SEARCH  */}
          <i className="bi bi-search text-2xl mr-7 hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all"></i>
          {/* COLUMNS  */}
          <div className="dropdown mr-7">
            <i
              className="bi bi-layout-three-columns text-2xl hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all"
              type="button"
              id="settings-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            {/* GRID DROPDOWN  */}
            <ul
              className="dropdown-menu px-2"
              aria-labelledby="settings-dropdown-button"
            >
              <li className="py-2 px-2 my-2 bg-offCanvasSelected rounded-md text-base">
                <pre>Show Columns </pre>
                {/* 2002kunalmondal13 */}
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
          </div>
          {/* TABLE */}
          <div className="dropdown mr-7">
            <i
              className="bi bi-filter text-2xl hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all"
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
              className="bi bi-cloud-arrow-down text-2xl hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all"
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
          <div className="dropdown mr-7">
            <i
              className="bi bi-cloud-arrow-up text-2xl hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all"
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
          <Link
            className="flex items-center px-3 py-2 border-2 rounded-md hover:bg-offCanvasHover hover:scale-110 transition-all"
            to="/dashboard/administration/register"
            onClick={() => {
              setRegisterActive(true);
            }}
          >
            <i className="bi bi-plus-lg mr-2 text-xl"></i>
            <span className="text-lg">Create New</span>
          </Link>
        </div>
        <div className="md:hidden">
          {/* SEARCH  */}
          <i
            className="bi bi-search text-xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
            type="button"
          ></i>
          {/* CREATE NEW USER  */}
          <i
            className="bi bi-plus text-2xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
            type="button"
          ></i>
          
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
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-cloud-arrow-up text-lg mr-4"></i>
                <span className="text-lg">Upload</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* USERS  */}
      <div
        className="items-start grid sm:grid-cols-2 md:grid-cols-2 md:gap-4 grid-cols-1 mt-4"
        style={registerActive ? {} : { grid: "none" }}
      >
        <div
          className="login flex justify-start flex-col mr-40"
          style={registerActive ? {} : registerActiveCss}
        >
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl pb-5">Register</h1>
            <div>
              <i
                className="bi bi-x-lg text-2xl px-2 py-1 bg-gray-200 hover:bg-red-500 hover:text-white rounded-lg shadow"
                onClick={() => {
                  setRegisterActive(!registerActive);
                }}
              ></i>
            </div>
          </div>
          <RegisterAdmin status={registerActive} />
        </div>
        <div className="">
          <AdminList />
        </div>
      </div>
    </div>
  );
}
