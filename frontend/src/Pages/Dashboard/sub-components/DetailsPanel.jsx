import React, { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ThemeContext from "../../../context/theme/themeContext";

export default function DetailsPanel() {
  const theme = useContext(ThemeContext)
  return (
    <div
      className="bg-white rounded-lg pt-3 pb-3 mt-3 px-4 shadow border overflow-hidden"
      style={{ height: "25.5rem" }}
    >
      {/* HEADER  */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-lg">Device Details</p>
        <span className="p-2 hover:scale-105 transition-all cursor-pointer hover:bg-gray-200 rounded-full">
          <BsThreeDotsVertical className="text-lg" />
        </span>
      </div>
      <div className="flex flex-col justify-between h-80">
        <div>
          <p className="font-semibold">Device Identifier</p>
          <p className={`${theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"}`}>94:54:93:4A:EB:2B</p>
        </div>
        <div>
          <p className="font-semibold">Device Type</p>
          <p className="text-gray-400">vEdge 1.6</p>
        </div>
        <div>
          <p className="font-semibold">Firmware Version</p>
          <p className="text-gray-400">3.0.2</p>
        </div>
        <div>
          <p className="font-semibold">RSSI (dBm)</p>
          <p className="text-gray-400">-</p>
        </div>
        <div>
          <p className="font-semibold">Subscription Status</p>
          <i className="bi bi-record-fill text-infoCardDarkGreen text-lg"></i>
        </div>
      </div>
    </div>
  );
}
