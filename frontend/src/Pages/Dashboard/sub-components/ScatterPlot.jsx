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

require("highcharts/modules/map")(Highcharts);
// require("highcharts/highcharts")(Highcharts);
require("highcharts/highcharts-3d")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);

export default function ScatterPlot({ analyticsData }) {
  Highcharts.seriesTypes.line.prototype.drawLegendSymbol =
    Highcharts.seriesTypes.area.prototype.drawLegendSymbol;

  // State for the data
  const [dataState, setDataState] = useState([]);

  return (
    <div
      className="bg-white rounded-lg p-3 pt-3 shadow border overflow-hidden mb-3"
      style={{ height: "38rem" }}
    >
      {/* SPLINE CHART  */}
      <div className="">
        <HighchartsReact
          containerProps={{ style: { height: "36.5rem" } }}
          highcharts={Highcharts}
          options={options.scatterPlotOptions(Highcharts)}
        />
        {!analyticsData && (
          <p
            className="card-text placeholder-wave relative px-2 hidden"
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
