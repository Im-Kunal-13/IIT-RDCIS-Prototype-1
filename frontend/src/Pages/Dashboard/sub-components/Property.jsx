import React from "react";

export default function Property({name, percentage, colorDark, colorLightClass, paddingBottom}) {
  return (
    <div style={{ paddingBottom: paddingBottom ? "12%": "7%" }}>
      <div className="d-flex justify-content-between info-card-title pb-2">
        <span className="font-semibold">
          {/* <i className={`bi ${props.data.iconClass} pe-3`}></i> */}
          {name}
        </span>
        <span className="text-gray-400 font-semibold">{percentage}%</span>
      </div>
      <div className={`progress rounded-sm h-5 ${colorLightClass} overflow-visible`}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`,
            backgroundColor: colorDark,
            boxShadow: `0 0 10px 1px ${colorDark}`
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}