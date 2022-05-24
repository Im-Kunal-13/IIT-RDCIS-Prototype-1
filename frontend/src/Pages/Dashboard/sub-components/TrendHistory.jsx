import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";
import Select from "react-select";
import { useState } from "react";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

export default function TrendHistory({ analyticsData }) {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;

  // State for the data
  const [dataState, setDataState] = useState([]);

  //   STATE FOR FEATURE SELECTED OPTION
  const [selectedFeature, setSelectedFeature] = useState("Time Duration");

  //   STATE FOR INTERVAL SELECTED OPTION
  const [selectedOption, setSelectedOption] = useState("Time Duration");

  //   STATE FOR INTERVAL SELECTED OPTION
  const [trendFeature, setTrendFeature] = useState("Time Duration");

  //   STATE FOR FEATURES DROPDOWN
  const [features, setFeatures] = useState({
    healthScore: false,
    totalAcceleration: false,
    axialVelocity: false,
    verticalVelocity: false,
    horizontalVelocity: false,
    temperature: false,
    audio: false,
    angularMisalignment: false,
    looseness: false,
    parallelMisalignment: false,
    bearingFaultBSF: false,
    bearingFaultBPFO: false,
    bearingFaultFTF: false,
    bearingFaultBPFI: false,
    verticalAccelerationRMS: false,
    horizontalAccelerationRMS: false,
    axialAccelerationGS: false,
    verticalAccelerationGS: false,
    horizontalAccelerationGS: false,
    axialAccelerationCrestFactor: false,
    verticalAccelerationCrestFactor: false,
    horizontalAccelerationCrestFactor: false,
    axialAccelerationKurtosis: false,
    verticalAccelerationKurtosis: false,
    horizontalAccelerationKurtosis: false,
    shockwaveAxial: false,
    shockwaveVertical: false,
    shockwaveHorizontal: false,
  });
  const featureNames = [
    "Health Score",
    "Total Acceleration",
    "Axial Velocity",
    "Vertical Velocity",
    "Horizontal Velocity",
    "Temperature",
    "Audio",
    "Angular Misalignment",
    "Looseness",
    "Parallel Misalignment",
    "Bearing Fault BSF",
    "Bearing Fault BPFO",
    "Bearing Fault FTF",
    "Bearing Fault BPFI",
    "Vertical Acceleration RMS",
    "Horizontal Acceleration RMS",
    "Axial Acceleration GS",
    "Vertical Acceleration GS",
    "Horizontal Acceleration GS",
    "Axial Acceleration CF",
    "Vertical Acceleration CF",
    "Horizontal Acceleration CF",
    "Axial Kurtosis",
    "Vertical Kurtosis",
    "Horizontal Kurtosis",
    "Shockwave Axial",
    "Shockwave Vertical",
    "Shockwave Horizontal",
  ];

  //   INTERVAL SELECT OPTIONS
  const intervalOptions = [
    { value: "1 Day", label: "1 Day" },
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
      style={{ height: "50.5rem" }}
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
              value={selectedFeature}
              onChange={setSelectedFeature}
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
          containerProps={{ style: { height: "49rem" } }}
          highcharts={Highcharts}
          options={options.trendHistoryOptions(analyticsData, selectedFeature)}
        />
        {!analyticsData && (
          <p
            className="card-text placeholder-wave relative px-2"
            style={{ bottom: "40rem" }}
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
              <span className="placeholder col-4 bg-gray-400 my-2"></span>
              <span className="placeholder col-6 bg-gray-400 my-2"></span>
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
