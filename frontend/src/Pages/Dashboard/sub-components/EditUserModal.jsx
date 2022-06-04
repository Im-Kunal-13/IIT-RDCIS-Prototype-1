import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, resetUpdateUser } from "../../../features/auth/authSlice";

export default function EditUserModal({ user, index }) {
  // INITIAL STATE OF THE FORM.
  const initialState = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    organization: user.organization,
    administrator: user.administrator,
  };

  // GETTING THE REFERENCE OF A BUTTON
  const closeBtn = useRef(null);
  // FORM STATE
  const [form, setForm] = useState(initialState);

  // TERMS AND CONDITIONS CHECKBOX
  // const [termsCheck, setTermsCheck] = useState(false);

  //ADMIN STATE
  const [isAdmnin, setIsAdmin] = useState(false);

  // FUNCTION WHICH WILL BE TRIGERED ON FORM DATA CHANGE.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // For dispatching functions
  const dispatch = useDispatch();

  // Destructuring data.
  const {
    updateUserError,
    updateUserSuccess,
    updateUserLoading,
    updateUserMessage,
  } = useSelector((state) => state.auth);

  // USE Effect
  useEffect(() => {
    if (updateUserError) {
      console.log("something went wrong!");
    }

    if (updateUserSuccess) {
      closeBtn.current.click();

      toast.success(`User updated sucessfully.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "updateSucces1",
      });

      dispatch(resetUpdateUser());
    }
  }, [updateUserError, updateUserSuccess, updateUserMessage, dispatch]);

  // SUBMIT BUTTON HANDLE FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    const adminData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      organization: form.organization,
      administrator: form.administrator,
    };

    await dispatch(updateUser({ id: user._id, user: adminData }));
  };
  return (
    <div
      className="modal fade"
      id={`update-user-${index}-backdrop`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "650px" }}
      >
        <div className="modal-content rounded-lg border-0 md:px-20 shadow">
          {/* CLOSE BUTTON  */}
          <span
            className="ml-auto relative top-12 right-4 hover:scale-110 transition-all text-white cursor-pointer"
            ref={closeBtn}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="bi bi-x-lg text-2xl py-1 px-2 rounded-md form-labels close-btn"></i>
          </span>
          <div className="modal-header flex justify-center pb-2 border-0">
            <div>
              <h5
                className="modal-title font-bold text-2xl "
                id="staticBackdropLabel"
              >
                User Profile
              </h5>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* NAME  */}
              <div className="input-group mb-4">
                <span
                  className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                  id="basic-addon1"
                >
                  <i className="bi bi-person-fill text-2xl text-white"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-l-0 rounded-lg border-0 shadow"
                  placeholder="Name"
                  aria-label="name"
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              {/* EMAIL  */}
              <div className="input-group my-4">
                <span
                  className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                  id="basic-addon1"
                >
                  <i className="bi bi-envelope-open-fill text-2xl text-white"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-l-0 rounded-lg border-0 shadow bg-white"
                  placeholder="Email"
                  aria-label="email"
                  value={form.email}
                  name="email"
                  disabled
                  onChange={handleChange}
                  aria-describedby="basic-addon-email"
                  required
                />
              </div>
              {/* PHONE  */}
              <div className="input-group my-4">
                <span
                  className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                  id="basic-addon1"
                >
                  <i className="bi bi-telephone-fill text-2xl text-white"></i>
                </span>
                <input
                  type="number"
                  className="form-control border-l-0 rounded-lg border-0 shadow"
                  placeholder="Phone Number"
                  aria-label="Username"
                  value={form.phone}
                  name="phone"
                  onChange={handleChange}
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              {/* ORGANIZATION */}
              <div className="input-group my-4">
                <span
                  className="input-group-text bg-themeViolet1 form-labels border-r-0 rounded-lg border-0 shadow"
                  id="basic-addon1"
                >
                  <i className="bi bi-bank2 text-2xl text-white"></i>
                </span>
                <select
                  className="form-control border-l-0 rounded-lg border-0 shadow"
                  value={form.organization}
                  name="organization"
                  onChange={handleChange}
                  required
                >
                  <option>Steel Authority of India</option>
                  <option>Micro System Foundation</option>
                </select>
              </div>
              {/* ADMINISTRATOR OR NOT  */}
              <div className="input-group my-4">
                <span
                  className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                  id="basic-addon1"
                >
                  <i className="bi bi-person-workspace text-2xl text-white"></i>
                </span>
                <input
                  type="text"
                  className={`form-control bg-transparent border-l-0 rounded-lg border-0 shadow text-${
                    isAdmnin ? "green-600" : "red-600"
                  } font-semibold`}
                  placeholder="Admin"
                  autoComplete="username"
                  aria-label="Username"
                  value={isAdmnin ? "True" : "False"}
                  readOnly
                  aria-describedby="basic-addon1"
                  required
                />
                <span
                  className="input-group-text form-labels border-l-0 rounded-lg border-0 shadow"
                  onClick={async () => {
                    await setIsAdmin(!isAdmnin);
                    setForm({ ...form, administrator: !isAdmnin });
                  }}
                  htmlFor="admin-checkbox"
                >
                  <i
                    className={`bi ${
                      isAdmnin ? "bi-check-lg" : "bi-x-lg"
                    } text-lg text-white`}
                  ></i>
                </span>
              </div>
              {/* TERMS & CONDITIONS  */}
              {/* <div className="form-check flex justify-center items-center mt-4">
                <input
                  className="form-check-input mr-2 terms-checkbox"
                  type="checkbox"
                  value={termsCheck}
                  onChange={() => {
                    setTermsCheck(!termsCheck);
                  }}
                  id={`terms-checkbox${index}`}
                  required
                />
                <label
                  className="form-check-label text-xs mt-1"
                  htmlFor={`terms-checkbox${index}`}
                >
                  I have read and agreed to{" "}
                  <span className="text-lightBlue2 cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
              </div> */}
              {/* SIGN UP BUTTON  */}
              <div className="flex justify-center mt-4">
                <button
                  className="rounded-lg py-2 px-8 landing-review text-white form-labels hover:scale-x-110 transition-all w-52"
                  type="submit"
                >
                  {updateUserLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    "UPDATE PROFILE"
                  )}
                </button>
              </div>
              {/* ALREADY HAVE AN ACCOUNT  */}
              <div className="form-check flex justify-center items-center my-4 p-0">
                <label
                  className="form-check-label text-xs mt-1"
                  htmlFor="flexCheckDefault"
                >
                  Update your own account?{" "}
                  <span className="text-lightBlue1 cursor-pointer">Edit</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
