import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, reset } from "../../../features/auth/authSlice";
import AdminListItem from "./AdminListItem";
import DeleteUserModal from "./DeleteUserModal";

export default function AdminList() {
  // For Navigation
  const navigate = useNavigate();
  // For Dispatching.
  const dispatch = useDispatch();

  // Taking out variables from the state.
  const {
    admin,
    admins,
    adminsIsError,
    adminsIsSuccess,
    adminsIsLoading,
    adminsMessage,
  } = useSelector((state) => state.auth);

  // Loading the admins on useEffect.
  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    // Getting all the admins
    dispatch(getUsers());
  }, [admin, navigate, adminsIsError, adminsMessage, dispatch]);

  return (
    <>
      {/* SMALLER DEVICES  */}
      {adminsIsLoading ? (
        <div className="flex items-center justify-center h-full xl:hidden">
          <span
            className="spinner-border spinner-border-sm text-lightCyan"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="accordion flex xl:hidden" id="accordionExample">
          {admins.length > 0 ? (
            <div className="admins w-full">
              {admins.map((user, index) => (
                <AdminListItem key={index} user={user} index={index} />
              ))}
            </div>
          ) : (
            <h3 className="px-4">You have not set any admins</h3>
          )}
        </div>
      )}

      {/* LARGER  */}
      <div className="grid-cols-5 hidden xl:grid">
        {/* EMAIL ADDRESS  */}
        <div>
          {/* HEADER  */}
          <div className="header font-semibold text-gray-500 text-lg mb-4">
            Email Address
          </div>
          {/* CONTENT  */}
          {admins.map((admin, index) => (
            <div key={index}>
              <hr style={{ height: ".5px" }} />
              <div className="content my-3">{admin.email}</div>
            </div>
          ))}
        </div>
        {/* ORGANIZATION  */}
        <div>
          {/* HEADER  */}
          <div className="header font-semibold text-gray-500 text-lg mb-4">
            Organization
          </div>
          {/* CONTENT  */}
          {admins.map((admin, index) => (
            <div key={index}>
              <hr style={{ height: ".5px" }} />
              <div className="content text-lightBlue2 my-3 hover:underline cursor-pointer">
                {admin.organization}
              </div>
            </div>
          ))}
        </div>
        {/* NAME  */}
        <div>
          {/* HEADER  */}
          <div className="header font-semibold text-gray-500 text-lg mb-4">
            Name
          </div>
          {/* CONTENT  */}
          {admins.map((admin, index) => (
            <div key={index}>
              <hr style={{ height: ".5px" }} />
              <div className="content my-3">{admin.name}</div>
            </div>
          ))}
        </div>
        {/* PHONE NUMBER  */}
        <div>
          {/* HEADER  */}
          <div className="header font-semibold text-gray-500 text-lg mb-4">
            Phone Number
          </div>
          {/* CONTENT  */}
          {admins.map((admin, index) => (
            <div key={index}>
              <hr style={{ height: ".5px" }} />
              <div className="content my-3">{admin.phone}</div>
            </div>
          ))}
        </div>
        {/* ADMINISTRATOR  */}
        <div>
          {/* HEADER  */}
          <div className="header font-semibold text-gray-500 text-lg mb-4">
            Administrator
          </div>
          {/* CONTENT  */}
          {admins.map((user, index) => (
            <div key={index}>
              <hr style={{ height: ".5px" }} />
              <div className="flex justify-between items-center">
                <span
                  className={`content my-3 ${
                    user.administrator ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {user.administrator ? "Yes" : "No"}
                </span>
                {admin?.administrator && (
                  <div className="">
                    <i
                      className="bi bi-pen-fill mr-2 text-xl hover:bg-nav1Hover p-2 rounded-lg  text-lightCyan transition-all hover:scale-110"
                      type="button"
                    ></i>
                    <i
                      className="bi bi-trash-fill text-xl hover:bg-nav1Hover p-2 rounded-lg text-red-600 hover:scale-110 transition-all"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-user${
                        index + "-large-"
                      }-backdrop`}
                    ></i>
                    <DeleteUserModal user={user} index={index + "-large-"} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
