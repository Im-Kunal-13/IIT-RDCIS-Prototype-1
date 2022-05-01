import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeKeeper from "react-timekeeper";
import "react-calendar/dist/Calendar.css";
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

  const { admin } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <div className="py-3">
      {/* HEADER  */}
      <div className="flex justify-between items-center px-4">
        <h1 className="font-semibold text-2xl">SAIL BOKARO_CRUSHER AREA</h1>
        {/* CONTROLS  */}
        <div className="items-center hidden md:flex">
          {/* SEARCH  */}
          <i className="bi bi-search text-2xl mr-5 hover:bg-offCanvasHover p-2 rounded-lg hover:scale-110 transition-all cursor-pointer"></i>
          {/* SEARCH START  */}
          {/* <p>
            Current selected date is <b>{value.getDay.toString()}</b>
          </p> */}
          <div className="flex items-center mr-3">
            <p className="mr-2">START</p>
            <div className="flex items-center my-3 pl-1 pr-3 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all ">
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
                  <i class="bi bi-calendar"></i>
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
                  <i class="fa-solid fa-chevron-down text-xs"></i>
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
            <div className="flex items-center my-3 pl-1 pr-3 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all ">
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
                  <i class="bi bi-calendar"></i>
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
                  <i class="fa-solid fa-chevron-down text-xs"></i>
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
          <div className="flex items-center my-3 py-2 px-3 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-56">
            <i className="bi bi-clock-history mr-2 text-xl"></i>
            <select
              className="bg-transparent border-none outline-none w-full cursor-pointer text-lg"
              //   value={tab}
              //   onChange={(e) => {
              //     setTab(e.target.value);
              //   }}
            >
              <option className="text-lg" defaultChecked>
                Time Duration
              </option>
              <option className="text-lg">Today</option>
              <option className="text-lg">This Month</option>
              <option className="text-lg">30 Min</option>
              <option className="text-lg">1 Hour</option>
              <option className="text-lg">1 Day</option>
              <option className="text-lg">1 Week</option>
              <option className="text-lg">1 Month</option>
              <option className="text-lg">1 Year</option>
              <option className="text-lg">All</option>
              );
            </select>
          </div>
        </div>
        {/* SMALLER SCREENS  */}
        <div className="md:hidden">
          {/* SEARCH  */}
          <i
            className="bi bi-search text-xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
            type="button"
          ></i>
          {/* CREATE NEW USER  */}
          {admin?.administrator ? (
            <i
              className="bi bi-plus text-2xl hover:bg-nav1Hover p-2 rounded-lg md:hidden transition-all hover:scale-110 mr-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#register-user-backdrop"
            ></i>
          ) : (
            <i
              className="bi bi-plus text-2xl p-2 rounded-lg md:hidden transition-all mr-2"
              type="button"
            ></i>
          )}

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
