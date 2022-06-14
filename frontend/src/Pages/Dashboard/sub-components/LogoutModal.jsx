import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ThemeContext from "../../../context/theme/themeContext";

export default function LogoutModal() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // On logout function.
  const onLogout = async () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
    if (window.innerWidth < 768) {
      window.location.reload();
    } else {
      if (theme.state === "purple") {
        toast.dark("You're logged out.", {
          icon: (
            <i className="bi bi-exclamation-triangle-fill text-xs rounded-full text-white bg-themeViolet1 py-1 px-1.5"></i>
          ),
          position: toast.POSITION.BOTTOM_RIGHT,
          toastId: "logoutSucces1",
          theme: "light",
        });
      }
      else {
        toast.info("You're logged out.", {
          icon: (
            <i className="bi bi-exclamation-triangle-fill text-xs rounded-full text-white bg-lightBlue2 py-1 px-1.5"></i>
          ),
          position: toast.POSITION.BOTTOM_RIGHT,
          toastId: "logoutSucces1",
          theme: "light",
        });
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="flex items-center">
              <i
                className={`bi bi-exclamation-circle text-2xl pr-2 ${
                  theme.state === "purple"
                    ? "text-themeBlue1"
                    : "text-lightBlue2 "
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
              <h5
                className="modal-title text-black font-bold"
                id="staticBackdropLabel"
              >
                Confirm Logout
              </h5>
            </div>
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 bg-offCanvasHover hover:bg-red-600 hover:text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">Are you sure you want to Logout?</div>
          <div className="modal-footer">
            <button
              type="button"
              className={`text-white border px-4 py-1 rounded-sm shadow hover:scale-x-110 transition-all ${
                theme.state === "purple" ? "bg-themeBlue1" : "bg-lightBlue2"
              }`}
              data-bs-dismiss="modal"
              onClick={onLogout}
            >
              Yes
            </button>
            <button
              type="button"
              className={`border px-4 py-1 rounded-sm shadow hover:scale-x-110 transition-all ${
                theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"
              }`}
              data-bs-dismiss="modal"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
