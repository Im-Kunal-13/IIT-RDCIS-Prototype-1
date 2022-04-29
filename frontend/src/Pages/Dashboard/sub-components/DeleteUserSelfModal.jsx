import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelf, resetDeleteSelf } from "../../../features/auth/authSlice";
import { toast } from "react-toastify";

export default function DeleteUserSelfModal() {
  // Destructuring data.
  const { admin } = useSelector((state) => state.auth);

  //   CONFIRM EMAIL STATE
  const [confirmEmail, setConfirmEmail] = useState("");
  const dispatch = useDispatch();

  // Getting reference to the hidden close button.
  const closeBtn = useRef(null);
  // Destructuring data.
  const {
    deleteSelfError,
    deleteSelfSuccess,
    deleteSelfLoading,
    deleteSelfMessage,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (deleteSelfSuccess) {
      closeBtn.current.click();

      toast.success("User deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "logoutSucces1",
      });

      dispatch(resetDeleteSelf());
    }
  }, [deleteSelfSuccess, dispatch]);

  const onDelete = async () => {
    if (confirmEmail !== admin?.email) {
      toast.info("Confirm email to proceed.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "confirmEmail1",
      });
    } else {
      await dispatch(deleteSelf(admin?._id));
    }
  };
  return (
    <div
      className="modal fade"
      id="delete-user-self-modal"
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
              <i className="bi bi-exclamation-circle text-2xl pr-2 text-red-500"></i>
              <h5
                className="modal-title text-black font-bold"
                id="staticBackdropLabel"
              >
                Confirm Deletion
              </h5>
            </div>
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 bg-offCanvasHover hover:bg-red-500 hover:text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeBtn}
            ></i>
          </div>
          <div className="modal-body px-0 text-sm">
            <p className="mb-4 px-3 font-semibold">
              Are you sure you want to delete your account?
            </p>

            <p className="px-3 mb">
              This action <span className="font-semibold">cannot</span> be
              undone. This will{" "}
              <span className="font-semibold">permanently</span> delete this
              user's account from the server. Proceed with caution.
            </p>

            {/* EMAIL CONFIRMATION SECTION  */}
            <div className="mt-4">
              <div className="mb-2 px-3">
                Please type your email address to confirm.
              </div>
              <div className="input-group mb-2 mt-2 px-3">
                <input
                  type="text"
                  className="form-control rounded-lg shadow border-2 focus:border-red-500 transition-all"
                  placeholder="Enter your email to confirm"
                  aria-label="name"
                  value={confirmEmail}
                  name="name"
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                  }}
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
          </div>
          <div className="modal-footer justify-start px-3">
            <button
              type="button"
              className="border px-4 py-1 rounded-md bg-red-500 disabled:bg-red-300 shadow hover:scale-x-95 transition-all w-full text-white font-semibold"
              onClick={onDelete}
              disabled={!(confirmEmail === admin?.email)}
            >
              {deleteSelfLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ml-2">DELETING</span>
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                <>DELETE ACCOUNT</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
