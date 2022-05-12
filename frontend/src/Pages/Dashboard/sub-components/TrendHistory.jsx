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

export default function TrendHistory(props) {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;
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
  return (
    <div
      className="bg-white rounded-lg p-3 pt-0 shadow border overflow-hidden"
      style={{ height: "565px" }}
    >
      {/* Feature & Interval Dropdowns  */}
      <div className="flex mt-16">
        {/* FEATURES SECTION  */}
        <div className="flex items-center px-2 z-30">
          <p className="mr-2 font-semibold text-gray-400">FEATURES</p>
          <div className="dropdown hover:scale-95 transition-all">
            <div
              className="flex items-center py-2 px-3 justify-between hover:bg-offCanvasHover rounded-md border-2 h-12 shadow w-48 cursor-pointer"
              id="features-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>0 Selected</span>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>
            <ul
              className="dropdown-menu px-2 w-fit shadow max-h-96 overflow-y-scroll"
              style={{ scrollbarWidth: "thin", overflowX: "unset" }}
              aria-labelledby="features-dropdown-button"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <li className="py-2 px-2 my-2 bg-gray-200 rounded-md text-sm">
                <pre>Features</pre>
              </li>
              {featureNames.map((feature, index) => (
                <li
                  key={index}
                  className="py-2 px-2 my-2 rounded-md hover:bg-offCanvasHover transition-all hover:scale-95 cursor-pointer"
                >
                  <div className="flex items-center">
                    <input
                      className="form-check-input border-2 cursor-pointer mr-3 h-5 w-5 checked:bg-lightBlue2"
                      type="checkbox"
                      id={`feature${index}`}
                    />
                    <label
                      className="text-sm cursor-pointer"
                      htmlFor={`feature${index}`}
                    >
                      {feature}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* INTERVAL SECTION  */}
        <div className="flex items-center mr-2 px-2 z-30">
          <p className="mr-2 font-semibold text-gray-400">INTERVAL</p>
          <div className="flex items-center py-2 px-1 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-48 cursor-pointer z-10">
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
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
          containerProps={{ style: { height: "550px" } }}
          highcharts={Highcharts}
          options={options.trendHistoryOptions}
        />
      </div>
    </div>
  );
}
