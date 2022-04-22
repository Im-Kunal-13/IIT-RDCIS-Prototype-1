import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminListItem(props) {
  const [adminChecked, setAdminChecked] = useState(
    props.admin.administrator ? true : false
  );
  const handleCheckboxChange = (e) => {
    setAdminChecked(!adminChecked);
  };
  return (
    <div className="accordion-item border rounded-lg mb-4">
      <h2
        className=" pl-2 flex items-center justify-between h-14 bg-accordianBgBlue"
        id={`heading${props.index}`}
      >
        <span className="py-2 px-2 bg-offCanvasHover rounded-sm text-base">
          {props.admin.email}
        </span>
        <div className="flex items-center">
          <i className="bi bi-pen right-10 mr-5 text-lg hover:bg-offCanvasHover p-2 rounded-lg"></i>
          <input
            className="form-check-input mr-5 shadow-none text-lg"
            type="checkbox"
            name="admin-checkbox"
            checked={adminChecked}
            onChange={handleCheckboxChange}
            id="flexCheckDefault"
          />
          <i
            className="bi bi-chevron-down mr-5 text-xl hover:bg-offCanvasHover p-2 rounded-lg"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.index}`}
            aria-expanded="true"
            aria-controls={`collapse${props.index}`}
          ></i>
        </div>
      </h2>
      <div
        id={`collapse${props.index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${props.index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p className="mb-3">
            <strong className="text-base">First Name - </strong>
            <span className="text-base">{props.admin.name.split(" ")[0]}</span>
          </p>
          <p className="my-3">
            <strong className="text-base">Email Address - </strong>
            <Link to="" className="text-base text-blue-700 hover:underline">
              {props.admin.email}
            </Link>
          </p>
          <p className="my-3">
            <strong className="text-base">Last Name - </strong>
            <span className="text-base">{props.admin.name.split(" ")[1]}</span>
          </p>
          <p className="my-3">
            <strong className="text-base">Organization - </strong>
            <Link to="" className="text-base text-blue-700 hover:underline">
              {props.admin.organization}
            </Link>
          </p>
          <p className="my-3">
            <strong className="text-base">Phone Number - </strong>
            <span className="text-base">{props.admin.phone}</span>
          </p>
          <p className="my-3">
            <strong className="text-base">Time Zone - </strong>
            <span className="text-base">{props.admin.timezone}</span>
          </p>
          <p className="mt-3">
            <strong className="text-base">Administrator - </strong>
            <span className="text-base">
              {props.admin.administrator ? "Yes" : "No"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
