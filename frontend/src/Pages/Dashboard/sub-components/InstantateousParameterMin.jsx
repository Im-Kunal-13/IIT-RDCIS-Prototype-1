import React, { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";
import ThemeContext from "../../../context/theme/themeContext";

// Load Highcharts modules
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

export default function InstantateousParameterMin({
  name,
  gaugeData,
  bands,
  label,
  unit
}) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden hover:scale-95 transition-all cursor-pointer`}
      style={{ height: "327px" }}
    >
      {gaugeData ? (
        <div className="default">
          <HighchartsReact
            containerProps={{ style: { height: "300px" } }}
            highcharts={Highcharts}
            options={options.gaugeMinOptions(
              gaugeData,
              bands,
              theme.state,
              label,
              unit
            )}
          />
          <div className="text-center relative bottom-8 font-semibold">
            {name}
          </div>
        </div>
      ) : (
        <p className="card-text placeholder-wave px-3" style={{ bottom: "26rem" }}>
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
