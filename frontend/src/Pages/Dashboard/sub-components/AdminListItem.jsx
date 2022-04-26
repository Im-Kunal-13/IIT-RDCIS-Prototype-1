import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteUserModal from "./DeleteUserModal";

export default function AdminListItem({ user, index }) {
  const { admin } = useSelector((state) => state.auth);

  return (
    <div className="accordion-item border rounded-lg mb-4">
      <h2
        className=" pl-2 flex items-center justify-between h-14 bg-accordianBgBlue"
        id={`heading${index}`}
      >
        <span className="py-2 px-2 bg-offCanvasHover rounded-sm text-base hidden sm:inline">
          {user.email}
        </span>
        <span className="py-2 px-2 bg-offCanvasHover rounded-sm text-base inline sm:hidden">
          {user.email.slice(0, 20)}...
        </span>
        <div className="flex items-center">
          {admin?.administrator && (
            <div>
              <i className="bi bi-pen-fill  text-lg hover:bg-offCanvasHover p-2 rounded-lg text-lightCyan hover:scale-110 transition-all"></i>
              <i
                className="bi bi-trash-fill mr-2 text-lg hover:bg-offCanvasHover p-2 rounded-lg text-red-500 hover:scale-110 transition-all"
                data-bs-toggle="modal"
                data-bs-target={`#delete-user-${index}-backdrop`}
              ></i>
            </div>
          )}
          <input
            className="form-check-input mr-2 shadow-none text-lg"
            type="checkbox"
            name="admin-checkbox"
            defaultChecked={user.administrator}
            id="flexCheckDefault"
          />
          <i
            className="bi bi-chevron-down text-xl hover:bg-offCanvasHover p-2 rounded-lg"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="true"
            aria-controls={`collapse${index}`}
          ></i>
        </div>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse shadow"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p className="mb-3">
            <strong className="text-base">Name - </strong>
            <span className="text-base">{user.name}</span>
          </p>
          <p className="my-3">
            <strong className="text-base">Email Address - </strong>
            <Link to="" className="text-base text-blue-700 hover:underline">
              {user.email}
            </Link>
          </p>
          <p className="my-3">
            <strong className="text-base">Organization - </strong>
            <Link to="" className="text-base text-blue-700 hover:underline">
              {user.organization}
            </Link>
          </p>
          <p className="my-3">
            <strong className="text-base">Phone Number - </strong>
            <span className="text-base">{user.phone}</span>
          </p>
          <p className="mt-3">
            <strong className="text-base">Administrator - </strong>
            <span
              className={`text-base ${
                user.administrator ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.administrator ? "Yes" : "No"}
            </span>
          </p>
        </div>
      </div>
      <DeleteUserModal user={user} index={index} />
    </div>
  );
}
