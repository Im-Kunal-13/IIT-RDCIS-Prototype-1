import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, resetUpdateUser } from "../../../features/auth/authSlice";
import ThemeContext from "../../../context/theme/themeContext";

export default function EditUserSelfModal() {
  const theme = useContext(ThemeContext)
  // INITIAL STATE OF THE FORM.
  // Destructuring data.
  const { admin, updateUserError, updateUserSuccess, updateUserLoading } =
    useSelector((state) => state.auth);

  const initialState = {
    name: admin?.name,
    email: admin?.email,
    phone: admin?.phone,
    organization: admin?.organization,
    administrator: admin?.administrator,
    newPassword: "",
    confirmNewPassword: "",
  };

  // GETTING THE REFERENCE OF A BUTTON
  const closeBtn = useRef(null);
  // FORM STATE
  const [form, setForm] = useState(initialState);

  // PASSWORD VISIBILITY STATE
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] =
    useState(false);

  // FUNCTION WHICH WILL BE TRIGERED ON FORM DATA CHANGE.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // For dispatching functions
  const dispatch = useDispatch();

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
      setForm({});
      setNewPasswordVisibility(false);
      setConfirmNewPasswordVisibility(false);

      dispatch(resetUpdateUser());
    }
  }, [updateUserError, updateUserSuccess, dispatch]);

  // SUBMIT BUTTON HANDLE FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (!form.newPassword && !form.confirmNewPassword) {
      const userUpdateData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        organization: form.organization,
        administrator: form.administrator,
      };
      await dispatch(updateUser({ id: admin._id, user: userUpdateData }));
    } else {
      if (form.newPassword !== form.confirmNewPassword) {
        toast.info("Passwords do not match.", {
          position: toast.POSITION.BOTTOM_RIGHT,
          toastId: "logoutSucces1",
        });
      } else {
        const userUpdateData = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          administrator: form.administrator,
          password: form.newPassword,
        };

        await dispatch(updateUser({ id: admin._id, user: userUpdateData }));
      }
    }
  };
  return (
    <div
      className="modal fade"
      id={`edit-user-self-backdrop`}
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
          <span className="ml-auto relative top-12 right-4 hover:scale-110 transition-all text-white cursor-pointer">
            <i
              className={`bi bi-x-lg text-2xl py-1 px-2 rounded-md close-btn  ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
              ref={closeBtn}
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
                User Profile
              </h5>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* NAME  */}
              <div className="input-group mb-4">
                <span
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
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
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
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
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
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
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
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
              {/* ADMIN OR NOT  */}
              <div className="input-group my-4">
                <span
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  id="basic-addon1"
                >
                  <i className="bi bi-person-workspace text-2xl text-white"></i>
                </span>
                <input
                  type="text"
                  className={`form-control bg-transparent border-l-0 rounded-lg border-0 shadow text-${
                    form.administrator ? "green-600" : "red-600"
                  } font-semibold`}
                  placeholder="Admin"
                  autoComplete="username"
                  aria-label="Username"
                  value={form.administrator ? "True" : "False"}
                  disabled
                  readOnly
                  aria-describedby="basic-addon1"
                  required
                />
                <span
                  className={`input-group-text border-l-0 rounded-lg border-0 shadow flex items-center px-2.5 cursor-pointer ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  htmlFor="admin-checkbox"
                >
                  <input
                    className="form-check-input admin-checkbox m-0 h-6 w-6 border-none outline-none focus:shadow-none cursor-pointer"
                    style={!form.administrator ? {opacity: .5}: {}}
                    type="checkbox"
                    checked={form.administrator}
                    onChange={async (e) => {
                      setForm({ ...form, administrator: e.target.checked });
                    }}
                    id="flexCheckDefault-self"
                  />
                </span>
              </div>
              {/* NEW PASSWORD.  */}
              <div className="input-group my-4">
                <span
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  id="basic-addon1"
                >
                  <i className="bi bi-key-fill text-2xl text-white"></i>
                </span>
                <input
                  type={newPasswordVisibility ? "text" : "password"}
                  className="form-control border-l-0 rounded-lg border-0 shadow"
                  placeholder="New Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={form.newPassword}
                  name="newPassword"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
                <span
                  className={`input-group-text border-l-0 rounded-lg border-0 shadow cursor-pointer ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  onClick={() => {
                    setNewPasswordVisibility(!newPasswordVisibility);
                  }}
                >
                  <i
                    className={`bi ${
                      newPasswordVisibility ? "bi-eye-slash" : "bi-eye-fill"
                    } text-xl text-white`}
                  ></i>
                </span>
              </div>
              {/* CONFIRM NEW PASSWORD.  */}
              <div className="input-group my-4">
                <span
                  className={`input-group-text form-labels border-r-0 rounded-lg border-0 shadow ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  id="basic-addon1"
                >
                  <i className="bi bi-key-fill text-2xl text-white"></i>
                </span>
                <input
                  type={confirmNewPasswordVisibility ? "text" : "password"}
                  className="form-control border-l-0 rounded-lg border-0 shadow"
                  placeholder="Confirm New Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  autoComplete="new-password"
                  name="confirmNewPassword"
                  onChange={handleChange}
                  value={form.confirmNewPassword}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
                <span
                  className={`input-group-text border-l-0 rounded-lg border-0 shadow cursor-pointer ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  onClick={() => {
                    setConfirmNewPasswordVisibility(
                      !confirmNewPasswordVisibility
                    );
                  }}
                >
                  <i
                    className={`bi ${
                      confirmNewPasswordVisibility
                        ? "bi-eye-slash"
                        : "bi-eye-fill"
                    } text-xl text-white`}
                  ></i>
                </span>
              </div>
              {/* SIGN UP BUTTON  */}
              <div className="flex justify-center mt-4">
                <button
                  className={`rounded-lg py-2 px-8 landing-review text-white hover:scale-x-110 transition-all w-52 ${theme.state === "purple" ? "form-label-purple" : "form-label-blue"}`}
                  type="submit"
                >
                  {updateUserLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="ml-2">UPDATING</span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    <>UPDATE PROFILE</>
                  )}
                </button>
              </div>
              {/* DELETE YOUR ACCOUNT  */}
              <div className="form-check flex justify-center items-center my-4 p-0">
                <label
                  className="form-check-label text-xs mt-1"
                  htmlFor="flexCheckDefault"
                >
                  Delete your account?{" "}
                  <span
                    className="text-red-500 cursor-pointer hover:underline"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-user-self-modal"
                  >
                    Delete Account
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
