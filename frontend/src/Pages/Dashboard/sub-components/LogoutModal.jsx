import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

export default function LogoutModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.auth);

  const onLogout = async() => {
    await dispatch(logout());
    await dispatch(reset());

    toast.info("You're logged out.", {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId: "logoutSucces1",
    });
    navigate("/");
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
            <h5
              className="modal-title text-black font-bold"
              id="staticBackdropLabel"
            >
              Confirm Logout
            </h5>
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 bg-offCanvasHover hover:bg-red-600 hover:text-white rounded-lg hover:scale-110 transition-all"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">Are you sure you want to Logout?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="text-white border px-4 py-1 rounded-sm bg-lightBlue2 shadow hover:scale-x-110 transition-all"
              data-bs-dismiss="modal"
              onClick={onLogout}
            >
              Yes
            </button>
            <button
              type="button"
              className="border px-4 py-1 text-lightBlue2 rounded-sm shadow hover:scale-x-110 transition-all"
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
