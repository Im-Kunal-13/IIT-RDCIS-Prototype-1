import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";
import { useState } from "react";
import TimeKeeper from "react-timekeeper";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);
require("highcharts/highcharts-3d")(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);

export default function Area3d({ analyticsData }) {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;

  // SETTING THE TIME STATE `
  const [time, setTime] = useState("12:34");
  // SETTING THE DATE VALUE
  const [date, setDate] = useState(new Date());
  const changeDate = (e) => {
    setDate(e);
  };

  // State for the data
  const [dataState, setDataState] = useState([]);

  return (
    <div
      className="bg-white rounded-lg p-3 pt-0 shadow border overflow-hidden mb-3"
      style={{ height: "37.5rem" }}
    >
      {/* Feature & Interval Dropdowns  */}
      <div className="flex mt-16">
        {/* FEATURES SECTION  */}
        <div className="flex items-center px-2 z-10">
          <p className="mr-2 font-semibold text-gray-400">START</p>
          <div className="flex items-center pl-1 pr-3 hover:bg-blue-200 rounded-md border-2 h-12 shadow hover:scale-95 transition-all z-10">
            <div className="dropdown ">
              {/* DATE DROPDOWN BUTTON  */}
              <div
                className="cursor-pointer bg-transparent border-none outline-none text-lg w-36 flex justify-between pl-2 pr-3"
                id="date-start-select-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mr-2">
                  {moment(date)
                    .subtract(10, "days")
                    .calendar()
                    .replaceAll("/", "-")}
                </span>
                <i className="bi bi-calendar"></i>
              </div>
              {/* DATE START DROPDOWN  */}
              <ul
                className="dropdown-menu p-3 mt-4 border-none rounded-md overflow-hidden shadow"
                aria-labelledby="date-start-select-dropdown-button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Calendar
                  onChange={changeDate}
                  value={date}
                  className="border-none"
                />
              </ul>
            </div>
            {/* TIME SELECT DROPDOWN  */}
            <div className="dropdown border-l-2 pl-2">
              <div
                id="time-end-dropdown-button"
                className="cursor-pointer timeDropBtn flex items-center justify-between"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mr-2">{time}</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
              {/*  DROPDOWN  */}
              <ul
                className="dropdown-menu p-0 z-20 mt-4 border-none rounded-md overflow-hidden shadow"
                aria-labelledby="time-end-dropdown-button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <TimeKeeper
                  time={time}
                  onChange={(data) => setTime(data.formatted24)}
                  className="w-10"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* SPLINE CHART  */}
      <div className="relative bottom-24">
        <HighchartsReact
          containerProps={{ style: { height: "36rem", width: "100%" } }}
          highcharts={Highcharts}
          options={options.area3d(analyticsData)}
        />
        {!analyticsData && (
          <p
            className="card-text placeholder-wave relative px-2"
            style={{ bottom: "30rem" }}
          >
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-7 bg-gray-400 my-2"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
              <span className="placeholder col-6 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-8 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-7 bg-gray-400 my-2"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
              <span className="placeholder col-6 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-8 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-6 bg-gray-400 my-2"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
              <span className="placeholder col-5 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-7 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-7 bg-gray-400 my-2"></span>
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
            </span>
            <span className="block">
              <span className="placeholder w-4 h-4 mr-2 bg-gray-400 my-2 rounded-sm"></span>
              <span className="placeholder col-8 bg-gray-400 my-2"></span>
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
