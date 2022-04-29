import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import AdminList from "./AdminList";
import RegisterAdmin from "./RegisterAdmin";
import UserSignupModal from "./UserSignupModal";

export default function Users() {
  const registerActiveCss = { display: "none" };
  const { admin } = useSelector((state) => state.auth);
  return (
    <div className="py-3">
      {/* HEADER  */}
      <div className="flex justify-between items-center px-4">
        <h1 className="font-semibold text-2xl">Users</h1>
        {/* CONTROLS  */}
        <div className="items-center hidden md:flex">
          {/* SEARCH  */}
          <i className="bi bi-search text-2xl mr-7 hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all cursor-pointer"></i>
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
          <div className={`dropdown mr-7`}>
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
          {admin?.administrator ? (
            <div
              className="flex items-center px-3 py-2 border-2 rounded-md hover:bg-offCanvasHover hover:scale-110 transition-all cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#register-user-backdrop"
            >
              <i className="bi bi-plus-lg mr-2 text-xl"></i>
              <span className="text-lg">Create New</span>
            </div>
          ) : (
            <div className="flex items-center px-3 py-2 border-2 rounded-md bg-offCanvasHover transition-all cursor-pointer">
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
      <div className="items-start mt-4 sm:px-4">
        <AdminList />
      </div>
    </div>
  );
}
