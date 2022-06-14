import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";

// Load Highcharts modules
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

export default function InstantateousParameters({ name, gaugeData, bands }) {
  return (
    <div
      className="bg-white rounded-lg py-3 px-4 shadow border overflow-hidden mb-3 mx-1  hover:scale-95 transition-all"
      style={{ height: "327px" }}
    >
      {gaugeData ? (
        <div className="default">
          <HighchartsReact
            containerProps={{ style: { height: "300px" } }}
            highcharts={Highcharts}
            options={options.gaugeOptions(gaugeData, bands)}
          />
          <div className="text-center relative bottom-8 font-semibold">
            {name}
          </div>
        </div>
      ) : (
        <p className="card-text placeholder-wave" style={{bottom: "26rem"}}>
            <span className="placeholder col-7 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-6 bg-gray-400 my-2"></span>
            <span className="placeholder col-8 bg-gray-400 my-2"></span>
            <span className="placeholder col-7 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-6 bg-gray-400 my-2"></span>
            <span className="placeholder col-8 bg-gray-400 my-2"></span>
            <span className="placeholder col-6 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-4 bg-gray-400 my-2"></span>
            <span className="placeholder col-5 bg-gray-400 my-2"></span>
            <span className="placeholder col-7 bg-gray-400 my-2"></span>
          </p>
      )}
    </div>
  );
}
