import React, { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";
import Select from "react-select";
import { useState } from "react";
import ThemeContext from "../../../context/theme/themeContext";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

export default function TrendHistory({ analyticsData }) {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;

  const theme = useContext(ThemeContext);

  // custom styles for react-select
  const colorStyles = {
    option: (styles, { isFocused, isSelected, isActive }) => ({
      ...styles,
      background:
        isFocused & !isSelected
          ? `${
              theme.state === "purple"
                ? "rgb(187, 1, 255, .2)"
                : "rgb(1, 95, 243, .2);"
            }`
          : isSelected
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : isActive
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : undefined,
      zIndex: 1,
    }),
  };
  // State for the data
  const [dataState, setDataState] = useState([]);

  //   STATE FOR FEATURE SELECTED OPTION
  const [selectedFeature, setSelectedFeature] = useState({
    value: "Total Acceleration",
    label: "Total Acceleration",
  });

  //   STATE FOR INTERVAL SELECTED OPTION.
  const [selectedInterval, setSelectedInterval] = useState({
    value: "Today",
    label: "Today",
  });

  //   INTERVAL SELECT OPTIONS
  const intervalOptions = [
    { value: "Today", label: "Today" },
    { value: "1 Month", label: "1 Month" },
    { value: "7 Day", label: "7 Day" },
  ];

  //   FEATURE SELECT OPTIONS
  const featureOptions = [
    { value: "Total Acceleration", label: "Total Acceleration" },
    { value: "Axial Velocity", label: "Axial Velocity" },
    { value: "Vertical Velocity", label: "Vertical Velocity" },
    { value: "Horizontal Velocity", label: "Horizontal Velocity" },
    { value: "Temperature", label: "Temperature" },
    { value: "Audio", label: "Audio" },
    { value: "Bearing Fault BPFI", label: "Bearing Fault BPFI" },
    { value: "Bearing Fault BPFO", label: "Bearing Fault BPFO" },
    { value: "Bearing Fault BSF", label: "Bearing Fault BSF" },
    { value: "Bearing Fault FTF", label: "Bearing Fault FTF" },
    { value: "Looseness", label: "Looseness" },
    { value: "Parallel Misalignment", label: "Parallel Misalignment" },
    { value: "Angular Misalignment", label: "Angular Misalignment" },
  ];
  return (
    <div
      className="bg-white rounded-lg p-3 pt-0 shadow border overflow-hidden mb-3"
      style={{ height: "38rem" }}
    >
      {/* Feature & Interval Dropdowns  */}
      <div className="flex mt-16">
        {/* FEATURES SECTION  */}
        <div className="flex items-center px-2 z-10">
          <p className="mr-2 font-semibold text-gray-400">FEATURES</p>
          <div className="flex items-center py-2 px-1 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-48 cursor-pointer z-10">
            <Select
              value={selectedFeature}
              onChange={setSelectedFeature}
              styles={colorStyles}
              placeholder="Select Feature"
              options={featureOptions}
            />
            <i className="fa-solid fa-chevron-down text-xs relative right-7"></i>
          </div>
        </div>
        {/* INTERVAL SECTION  */}
        <div className="items-center mr-2 px-2 z-10 hidden sm:flex">
          <p className="mr-2 font-semibold text-gray-400">INTERVAL</p>
          <div className="flex items-center py-2 px-1 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-48 cursor-pointer z-10">
            <Select
              value={selectedInterval}
              onChange={setSelectedInterval}
              styles={colorStyles}
              placeholder="Select Interval"
              options={intervalOptions}
            />
            <i className="fa-solid fa-chevron-down text-xs relative right-7"></i>
          </div>
        </div>
      </div>
      {/* SPLINE CHART  */}
      <div className="relative bottom-24">
        <HighchartsReact
          containerProps={{ style: { height: "36.5rem" } }}
          highcharts={Highcharts}
          options={options.trendHistoryOptions(
            analyticsData,
            selectedFeature.value,
            theme.state === "purple" ? "#7944F6" : "#015FF3"
          )}
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
