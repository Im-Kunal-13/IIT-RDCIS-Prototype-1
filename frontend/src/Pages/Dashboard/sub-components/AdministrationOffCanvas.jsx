import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdministrationOffCanvas() {
  const [selectedTab, setSelectedTab] = useState("users");
  const selectedTabCss = { backgroundColor: "rgba(0, 0, 0, 0.150)" };

  // Plant dropdown select
  const [plant, setPlant] = useState("");

  return (
    <div className="offcanvas-body">
      {/* ORGANIZATION SELECT  */}
      <div className="text-lg mb-3 pl-1">Organization</div>
      <select
        className="form-select shadow-none text-lg"
        aria-label="Default select example"
      >
        {/* <option className="text-base">JCB</option>
          <option value="2" className="text-base">
            Micro System Foundation
          </option>
          <option value="3" className="text-base">
            Rourkella Steel Plant
          </option>
          <option value="3" className="text-base">
            Sail
          </option> */}
        <option value="3" className="text-base">
          Steel Authority of India
        </option>
        {/* <option value="3" className="text-base">
            Tata Steel
          </option> */}
      </select>
      {/* DIFFERENT PAGES  */}
      <div className="mt-4">
        <Link
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
          to="/organizations"
          onClick={() => {
            setSelectedTab("organizations");
          }}
          style={selectedTab === "organizations" ? selectedTabCss : {}}
        >
          <i className="bi bi-building text-lg mr-4"></i>
          <span className="text-lg">Organizations</span>
        </Link>
        <Link
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
          to=""
          onClick={() => {
            setSelectedTab("plants");
          }}
          style={selectedTab === "plants" ? selectedTabCss : {}}
        >
          <i className="bi bi-ticket-detailed text-lg mr-4"></i>
          <select
            className="bg-transparent border-none outline-none"
            value={plant}
            onChange={(e) => {
              setPlant(e.target.value);
            }}
          >
            {/* Sorting the plant names and displaying them accordingly.  */}
            {["Durgapur", "Borako", "Bhilai", "Burnpur", "RDCIS"].sort().map(
              (item, index) => {
                return (
                  <option key={index} className="text-lg">
                    {item === "RDCIS"
                      ? `${item} Ranchi`
                      : `${item} Steel Plant`}
                  </option>
                );
              }
            )}
            {/* <option className="text-lg">Durgapur Steel Plant</option>
              <option className="text-lg">Durgapur Steel Plant</option>
              <option className="text-lg">Borako Steel Plant</option>
              <option className="text-lg">Bhilai Steel Plant</option>
              <option className="text-lg">Burnpur Steel Plant</option>
              <option className="text-lg">RDCIS Ranchi</option> */}
          </select>
        </Link>
        <Link
          className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-lg"
          to="/users"
          onClick={() => {
            setSelectedTab("users");
          }}
          style={selectedTab === "users" ? selectedTabCss : {}}
        >
          <i className="bi bi-people-fill text-lg mr-4"></i>
          <span className="text-lg">Users</span>
        </Link>
      </div>
    </div>
  );
}
