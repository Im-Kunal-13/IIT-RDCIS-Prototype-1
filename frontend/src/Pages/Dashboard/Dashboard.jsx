import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteUserModal from "./sub-components/DeleteUserModal";
import LogoutModal from "./sub-components/LogoutModal";
import UserSignupModal from "./sub-components/UserSignupModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState("administration");
  const tabSelectedCss = {
    backgroundColor: "rgba(255, 255, 255, 0.300)",
  };

  // Destructuring data.
  const { admin, loginIsLoading, loginError, loginSuccess, loginMessage } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (loginError) {
      console.log("something went wrong!");
    }
    // If admin not present then redirecting to the navigation page.
    // if (!admin) {
    //   navigate("/");
    //   if (window.innerWidth < 768) {
    //     window.location.reload();
    //   } else {
    //     toast.info("You're logged out.", {
    //       position: toast.POSITION.BOTTOM_RIGHT,
    //       toastId: "logoutSucces1",
    //     });
    //   }
    // }
  }, [
    admin,
    loginError,
    loginIsLoading,
    loginSuccess,
    loginMessage,
    navigate,
    dispatch,
  ]);

  return (
    <div>
      {/* FIRST NAVBAR  */}
      <div className="flex justify-between items-center p-3">
        {/* LOGO  */}
        <div className="flex items-center">
          <button
            className="border-0 mr-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-list text-3xl  hover:bg-nav1Hover px-2 shadow rounded-lg"></i>
          </button>
          <img
            src={require("./sub-components/iit-logo2-transparent.png")}
            alt=""
            className="w-12 pr-2"
          />
          <h1 className="font-semibold text-2xl">EyeVib</h1>
        </div>
        <div className="items-center hidden md:flex">
          {/* NOTIFICATIONS  */}
          <i className="bi bi-bell text-2xl mr-6 hover:bg-nav1Hover p-2 rounded-lg hover:scale-110 transition-all"></i>
          {/* SETTINGS */}
          <div className="dropdown">
            <i
              className="bi bi-gear text-2xl mr-6 hover:bg-nav1Hover p-2 rounded-lg hover:scale-110 transition-all"
              type="button"
              id="settings-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
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
          </div>
          <div className="dropdown">
            <i
              className="bi bi-person-circle text-2xl hover:bg-nav1Hover p-2 rounded-lg hover:scale-110 transition-all"
              type="button"
              id="sign-in-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            {/* ACCOUNT DROPDOWN  */}
            <ul
              className="dropdown-menu px-2 z-20 shadow"
              aria-labelledby="sign-in-dropdown-button"
            >
              <li className="p-2 my-2 bg-gray-200 rounded-md text-base">
                {admin?.email}
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
          {/* <i className="bi bi-person-square"></i> */}
        </div>
      </div>
      {/* SECNOD NAVBAR  */}
      <div className="navbar2 flex items-center justify-evenly h-16 mt-1 sticky-top z-10 dashboard-review">
        {/* MONITORING  */}
        <Link
          className="px-2 py-2 md:py-2 md:text-2xl text-white hover:bg-nav2Hover hover:backdrop-blur-md rounded-lg"
          onClick={() => {
            setSelectedTab("monitoring");
          }}
          style={selectedTab === "monitoring" ? tabSelectedCss : {}}
          to="/dashboard/monitoring"
        >
          Monitoring
        </Link>
        {/* CONFIGURATION  */}
        <Link
          className="px-2 py-2 md:py-2 md:text-2xl text-white hover:bg-nav2Hover hover:backdrop-blur-md rounded-lg"
          onClick={() => {
            setSelectedTab("configuration");
          }}
          style={selectedTab === "configuration" ? tabSelectedCss : {}}
          to="/dashboard/configuration"
        >
          Configuration
        </Link>
        {/* ADMINISTRATION */}
        <Link
          className="px-2 py-2 md:py-2 md:text-2xl text-white hover:bg-nav2Hover hover:backdrop-blur-md rounded-lg"
          onClick={() => {
            setSelectedTab("administration");
          }}
          style={selectedTab === "administration" ? tabSelectedCss : {}}
          to="/dashboard/administration/adminList"
        >
          Administration
        </Link>
      </div>
      {/* LEFT OFFCANVAS  */}
      <Outlet />
      {/* <!-- Modal --> */}
      <LogoutModal />
      <UserSignupModal />
    </div>
  );
}
