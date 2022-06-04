import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetDeleteUser } from "../../../features/auth/authSlice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

export default function DeleteUserModal({ user, index }) {
  //   CONFIRM EMAIL STATE
  const [confirmEmail, setConfirmEmail] = useState("");
  const dispatch = useDispatch();

  // Getting reference to the hidden close button.
  const closeBtn = useRef(null);
  // Destructuring data.
  const {
    deleteUserError,
    deleteUserSuccess,
    deleteUserLoading,
    deleteUserMessage,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (deleteUserSuccess) {
      closeBtn.current.click();

      toast.success("User deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "logoutSucces1",
      });

      dispatch(resetDeleteUser());
    }
  }, [deleteUserSuccess, dispatch]);

  const onDelete = async () => {
    closeBtn.current.click();
    if (confirmEmail !== user?.email) {
      toast.info("Confirm email to proceed.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "confirmEmail1",
      });
    } else {
      await dispatch(deleteUser(user?._id));
    }
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
          <div className="modal-header flex items-center justify-center">
            <i
              className="bi bi-exclamation-triangle-fill text-2xl rounded-full text-infoCardDarkRed bg-infoCardLightRed"
              style={{ padding: "1rem 1.25rem" }}
            ></i>
          </div>
          <div className="modal-body px-0 text-center mx-auto flex items-center flex-col">
            <p className="font-semibold text-xl mb-2">
              Delete {user.administrator ? "Admin" : "User"}
            </p>
            <p className="px-10">
              You're proceeding to delete the{" "}
              {user.administrator ? "admin" : "user"}'s account. Are you sure?
            </p>
          </div>
          <div className="modal-footer sm:px-4 flex items-center justify-between">
            <button
              className="bg-pieChartGray bg-opacity-30 hover:bg-opacity-40 rounded-full font-semibold hover:scale-105 transition-all  text-base"
              style={{ padding: ".8rem 2rem" }}
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeBtn}
            >
              No, Keep it.
            </button>
            <button
              className="bg-infoCardDarkRed bg-opacity-80 hover:bg-opacity-100 text-white rounded-full font-semibold hover:scale-105 transition-all  text-base"
              style={{ padding: ".8rem 2rem" }}
              // onClick={onDelete}
            >
              Yes, Delete!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
