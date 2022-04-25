import React from "react";

export default function AdminPlaceholder() {
  return (
    <div className="border mb-4 placeholder-glow rounded-md overflow-hidden">
      <h2 className="pl-2 flex items-center justify-between h-14 placeholder col-12">
      <span className="py-2 px-2 bg-offCanvasHover rounded-sm text-base text-white">
          Loading...
        </span>
        <div className="flex items-center">
          <i className="bi bi-pen-fill  text-lg hover:bg-offCanvasHover p-2 rounded-lg text-lightCyan hover:scale-110 transition-all"></i>
          <i className="bi bi-trash-fill mr-2 text-lg hover:bg-offCanvasHover p-2 rounded-lg text-red-500 hover:scale-110 transition-all"></i>
          <input
            className="form-check-input mr-2 shadow-none text-lg"
            type="checkbox"
            name="admin-checkbox"
            defaultChecked={true}
            id="flexCheckDefault"
          />
          <i
            className="bi bi-chevron-down text-xl hover:bg-offCanvasHover p-2 rounded-lg text-white"
          ></i>
        </div>
      </h2>
    </div>
  );
}
