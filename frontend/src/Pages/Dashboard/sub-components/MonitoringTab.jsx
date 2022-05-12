import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeKeeper from "react-timekeeper";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import Calendar from "react-calendar";
import moment from "moment";

export default function MonitoringTab() {
  // SETTING THE TIME STATE `
  const [time, setTime] = useState("12:34");
  // SETTING THE DATE VALUE
  const [date, setDate] = useState(new Date());
  const changeDate = (e) => {
    setDate(e);
  };

  //   TIME DURATION SELECT OPTIONS
  const options = [
    { value: "Today", label: "Today" },
    { value: "This Month", label: "This Month" },
    { value: "30 Min", label: "30 Min" },
    { value: "1 Hour", label: "1 Hour" },
    { value: "1 Day", label: "1 Day" },
    { value: "1 Week", label: "1 Week" },
    { value: "1 Month", label: "1 Month" },
    { value: "1 Year", label: "1 Year" },
    { value: "All", label: "All" },
  ];

  //   STATE FOR TIME DURATION SELECTED OPTION
  const [selectedOption, setSelectedOption] = useState("Time Duration");

  const { admin } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <div className="py-2 px-3 mx-4 bg-white rounded-lg shadow border mb-3 sticky-top top-20 z-10">
      {/* HEADER  */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl sm:text-2xl">BOKARO STEEL PLANT</h1>
        {/* CONTROLS  */}
        <div className="items-center hidden lg2:flex">
          {/* SEARCH START  */}
          {/* <p>
            Current selected date is <b>{value.getDay.toString()}</b>
          </p> */}
          <div className="flex items-center mr-3">
            <p className="mr-2">START</p>
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
          {/* SEARCH END  */}
          <div className="flex items-center mr-2">
            <p className="mr-2">END</p>
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
                  className="dropdown-menu p-3 z-20 mt-4 border-none rounded-md overflow-hidden shadow"
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
          {/* TIME DURATION DROPDOWN */}
          <div className="flex items-center py-2 px-3 hover:bg-blue-200 mr-2 rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-56 cursor-pointer z-10">
            <i className="bi bi-clock-history mr-1 text-xl"></i>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              placeholder="Time Duration"
              options={options}
              className="border-none cursor-pointer"
            />
            <i className="fa-solid fa-chevron-down text-xs relative right-7"></i>
          </div>
          {/* REFRESH BUTTON  */}
          <i
            className="bi bi-arrow-clockwise text-white text-xl shadow border bg-lightBlue2 py-2 px-3 rounded-md transition-all bg-opacity-80 hover:bg-opacity-100 hover:scale-110"
            type="button"
          ></i>
        </div>
        {/* SMALLER SCREENS  */}
        <div className="lg2:hidden">
          {/* Grid icon  */}
          <i
            className="bi bi-grid-3x3-gap text-2xl hover:bg-nav1Hover p-2 rounded-lg transition-all hover:scale-110"
            type="button"
            id="usergrid-dropdown-button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          {/* grid dropdown  */}
          <ul
            className="dropdown-menu px-2 shadow"
            aria-labelledby="usergrid-dropdown-button"
          >
            {/* Filter Columns  */}
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-layout-three-columns text-lg mr-4"></i>
                <span className="text-lg">Filter Columns</span>
              </div>
            </li>
            {/* Filter Tables  */}
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-filter text-lg mr-4"></i>
                <span className="text-lg">Filter Tables</span>
              </div>
            </li>
            {/* Download  */}
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-cloud-arrow-down text-lg mr-4"></i>
                <span className="text-lg">Download</span>
              </div>
            </li>
            {/* Upload  */}
            <li className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover">
              <div className="flex items-center">
                <i className="bi bi-cloud-arrow-up text-lg mr-4"></i>
                <span className="text-lg">Upload</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
