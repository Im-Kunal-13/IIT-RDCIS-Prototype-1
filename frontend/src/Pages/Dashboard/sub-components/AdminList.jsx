import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdmins, reset } from "../../../features/admin/adminSlice";
import AdminListItem from "./AdminListItem";

export default function AdminList() {
  // For Navigation
  const navigate = useNavigate();
  // For Dispatching.
  const dispatch = useDispatch();

  // Taking out variables from the state.
  const { admin } = useSelector((state) => state.auth);
  const { admins, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.admins
  );

  // Loading the admins on useEffect.
  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    // Getting all the admins
    dispatch(getAdmins());
  }, [admin, navigate, isError, message, dispatch]);

  return (
    // <div className="accordion" id="accordionExample">
    //   {admins.length > 0 ? (
    //     <div className="admins">
    //       {admins.map((admin, index) => (
    //         <AdminListItem key={index} admin={admin} index={index + 1} />
    //       ))}
    //     </div>
    //   ) : (
    //     <h3>You have not set any admins</h3>
    //   )}
    // </div>

    <div className="grid grid-cols-5">
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
        {admins.map((admin, index) => (
          <div key={index}>
            <hr style={{ height: ".5px" }} />
            <div className="flex justify-between items-center">
              <span className="content my-3 text-green-500">
                {admin.administrator ? "Yes" : "No"}
              </span>
              <div className="">
                <i
                  className="bi bi-pen-fill mr-2 text-xl hover:bg-nav1Hover p-2 rounded-lg  text-lightCyan transition-all hover:scale-110"
                  type="button"
                ></i>
                <i
                  className="bi bi-trash-fill text-xl hover:bg-nav1Hover p-2 rounded-lg text-red-600 hover:scale-110 transition-all"
                  type="button"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
