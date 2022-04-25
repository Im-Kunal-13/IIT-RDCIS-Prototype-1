import React, { useState } from "react";

// INITIAL STATE OF THE FORM.
const initialState = {
  fullName: "",
  username: "",
  email: "",
  college: "",
  role: "admin",
  enrollmentNo: "",
  passoutYear: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

export default function UserSignupModal() {
  // FORM STATE
  const [form, setForm] = useState(initialState);

  // PASSWORD VISIBILITY STATE
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  //ADMIN STATE
  const [isAdmnin, setIsAdmin] = useState(false);

  // FUNCTION WHICH WILL BE TRIGERED ON FORM DATA CHANGE.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  // SUBMIT BUTTON HANDLE FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal fade"
      id="register-user-backdrop"
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
        <div className="modal-content rounded-lg border-0 px-20 shadow">
          {/* CLOSE BUTTON  */}
          <span className="ml-auto relative top-12 hover:scale-110 transition-all text-white">
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 rounded-md form-labels close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </span>
          <div className="modal-header flex justify-center pb-2 border-0">
            <div>
              <h5
                className="modal-title font-bold text-2xl "
                id="staticBackdropLabel"
              >
                Sign Up
              </h5>
            </div>
          </div>
          {/* NAME  */}
          <div className="modal-body">
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
                aria-label="Username"
                value={form.fullName}
                name="fullName"
                onChange={handleChange}
                aria-describedby="basic-addon1"
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
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Email"
                aria-label="Username"
                value={form.email}
                name="email"
                onChange={handleChange}
                aria-describedby="basic-addon1"
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
                value={form.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                aria-describedby="basic-addon1"
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
                id="organization"
              >
                <option>Steel Authority of India</option>
              </select>
            </div>
            {/* ADMIN OR NOT  */}
            <div className="input-group my-4">
              <span
                className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-person-workspace text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className={`form-control border-l-0 rounded-lg border-0 shadow text-${isAdmnin ? "green-600" : "red-600"} font-semibold`}
                placeholder="Admin"
                aria-label="Username"
                value={isAdmnin ? "True" : "False"}
                name="phoneNumber"
                onChange={handleChange}
                aria-describedby="basic-addon1"
              />
              <span
                className="input-group-text form-labels border-l-0 rounded-lg border-0 shadow"
                onClick={() => {
                  setIsAdmin(!isAdmnin);
                }}
              >
                <i
                  className={`bi ${
                    isAdmnin ? "bi-check-lg" : "bi-x-lg"
                  } text-lg text-white`}
                ></i>
              </span>
            </div>
            {/* PASSWORD.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-key-fill text-xl text-white"></i>
              </span>
              <input
                type={passwordVisibility ? "text" : "password"}
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                value={form.password}
                name="password"
              />
              <span
                className="input-group-text form-labels border-l-0 rounded-lg border-0 shadow"
                onClick={() => {
                  setPasswordVisibility(!passwordVisibility);
                }}
              >
                <i
                  className={`bi ${
                    passwordVisibility ? "bi-eye-slash" : "bi-eye-fill"
                  } text-lg text-white`}
                ></i>
              </span>
            </div>
            {/* CONFIRM PASSWORD.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text form-labels border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-key-fill text-2xl text-white"></i>
              </span>
              <input
                type={confirmPasswordVisibility ? "text" : "password"}
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Confirm Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword}
              />
              <span
                className="input-group-text form-labels border-l-0 rounded-lg border-0 shadow"
                onClick={() => {
                  setConfirmPasswordVisibility(!confirmPasswordVisibility);
                }}
              >
                <i
                  className={`bi ${
                    confirmPasswordVisibility ? "bi-eye-slash" : "bi-eye-fill"
                  } text-lg text-white`}
                ></i>
              </span>
            </div>
            {/* TERMS & CONDITIONS  */}
            <div className="form-check flex justify-center items-center mt-4">
              <input
                className="form-check-input mr-2 terms-checkbox"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-xs mt-1"
                htmlFor="flexCheckDefault"
              >
                I have read and agreed to{" "}
                <span className="text-themeViolet1 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {/* SIGN UP BUTTON  */}
            <div className="flex justify-center mt-4">
              <button
                className="rounded-lg py-2 px-8 landing-review text-white form-labels hover:scale-x-110 transition-all"
                type="submit"
                onClick={handleSubmit}
              >
                CREATE ACCOUNT
              </button>
            </div>
            {/* ALREADY HAVE AN ACCOUNT  */}
            <div className="form-check flex justify-center items-center my-4 p-0">
              <label
                className="form-check-label text-xs mt-1"
                htmlFor="flexCheckDefault"
              >
                Already have an account?{" "}
                <span className="text-lightBlue1 cursor-pointer">Sign In</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
