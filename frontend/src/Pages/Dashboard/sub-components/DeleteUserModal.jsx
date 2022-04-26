import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../features/auth/authSlice";
import { toast } from "react-toastify";

export default function DeleteUserModal({ user, index }) {
  const dispatch = useDispatch();

  // Destructuring data.
  const {
    deleteUserError,
    deleteUserSuccess,
    deleteUserLoading,
    deleteUserMessage,
  } = useSelector((state) => state.auth);

  const onDelete = async () => {
    await dispatch(deleteUser(user._id));
  };
  return (
    <div
      className="modal fade"
      id={`delete-user-${index}-backdrop`}
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
                className="bi bi-exclamation-circle text-2xl pr-2 text-lightBlue2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
              <h5
                className="modal-title text-black font-bold"
                id="staticBackdropLabel"
              >
                Confirm Deletion
              </h5>
            </div>
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 bg-offCanvasHover hover:bg-red-600 hover:text-white rounded-lg hover:scale-110 transition-all"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this user?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="text-white border px-4 py-1 rounded-sm bg-lightBlue2 shadow hover:scale-x-110 transition-all"
              data-bs-dismiss="modal"
              onClick={onDelete}
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
