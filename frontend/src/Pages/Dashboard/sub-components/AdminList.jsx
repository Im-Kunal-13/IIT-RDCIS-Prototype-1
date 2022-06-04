import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, reset } from "../../../features/auth/authSlice";
import AdminListItem from "./AdminListItem";
import DeleteUserModal from "./DeleteUserModal";
import EditUserModal from "./EditUserModal";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

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
    if (adminsIsError) {
      console.log(adminsMessage);
    }

    // Getting all the admins
    dispatch(getUsers());
  }, [adminsIsError, adminsMessage, dispatch]);

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
        <div className="accordion flex hidden" id="accordionExample">
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
      {/* USERS TABLE LARGER */}
      <div
        className="flex flex-col bg-white border-x border-t shadow rounded-lg overflow-hidden mx-3"
        style={{ borderBottom: "6px solid #E8EAFB" }}
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            className="inline-block w-full sm:px-6 lg:px-8"
            style={{ minWidth: "1085px" }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr className="dashboard-review">
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Email</span>
                      <span className="lg1:inline hidden"> Address</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Organization</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Name</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      <span>Phone</span>
                      <span className="lg1:inline hidden"> Name</span>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-4 py-4 text-left hover:bg-nav1Hover bg- cursor-pointer transition-all"
                    >
                      Administartor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, index) => (
                    <tr
                      key={`row${index}`}
                      className={`${
                        index !== 7 && "border-b"
                      } hover:scale-95 transition-all cursor-pointer hover:bg-nav1Hover hover:shadow rounded-md`}
                    >
                      <td className="text-sm text-lightBlue2 font-normal px-4 py-4 whitespace-nowrap">
                        <span className="hover:underline">{admin.email}</span>
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-4 py-4 whitespace-nowrap">
                        {admin.organization}
                      </td>
                      <td className="text-sm font-normal text-black px-4 py-4 whitespace-nowrap">
                        <span className="">{admin.name}</span>
                      </td>
                      <td className="text-sm font-normal px-4 py-4 whitespace-nowrap">
                        <span className="hover:underline">{admin.phone}</span>
                      </td>
                      <td
                        className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap flex items-center justify-between"
                        style={{ maxHeight: "70px" }}
                      >
                        <span
                          className={`font-bold ${
                            admin.administrator
                              ? "text-infoCardDarkGreen"
                              : "text-infoCardDarkRed"
                          }`}
                        >
                          {admin.administrator ? "Yes" : "No"}
                        </span>
                        <span className="flex items-center">
                          <i
                            className="bi bi-pen-fill mr-2 text-lg hover:bg-nav1Hover py-2.5 px-3 rounded-full  text-lightBlue2 transition-all hover:scale-110 shadow"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#update-user-${
                              index + "-large-"
                            }-backdrop`}
                          />
                          <button
                            className="hover:bg-nav1Hover py-3 px-3 rounded-full shadow transition-all hover:scale-110"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#delete-user-${
                              index + "-large-"
                            }-backdrop`}
                          >
                            <FaTrash
                              size={"1.05rem"}
                              color="#FF0022"
                              className=""
                            />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {admins.map((user, index) => (
        <div key={index}>
          <EditUserModal
            user={user}
            index={`${index + "-large-"}`}
          
          />
          <DeleteUserModal user={user} index={`${index + "-large-"}`} />
        </div>
      ))}
    </>
  );
}
