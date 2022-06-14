import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelf, resetDeleteSelf } from "../../../features/auth/authSlice";
import { toast } from "react-toastify";

export default function DeleteUserSelfModal() {
  // Destructuring data.
  const { admin } = useSelector((state) => state.auth);

  //   CONFIRM EMAIL STATE
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
      // toast.info("Confirm email to proceed.", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      //   toastId: "confirmEmail1",
      // });
      await dispatch(deleteSelf(admin?._id));
  };
  return (
    <div
    className="modal fade"
    id={`delete-user-self-modal`}
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header flex items-center justify-center p-0 relative bottom-0">
          <i
            className="bi bi-exclamation-triangle-fill text-2xl rounded-full text-infoCardDarkRed bg-infoCardLightRed relative bottom-7 shadow"
            style={{ padding: "1rem 1.25rem" }}
          ></i>
        </div>
        <div className="modal-body px-0 text-center mx-auto flex items-center flex-col">
          <p className="font-semibold text-xl mb-2">
            Delete Account
          </p>
          <p className="px-10">
            You're proceeding to delete your account. Are you sure?
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
