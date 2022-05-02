import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

function TrendHistory(props) {

  return (
    <div className="bg-white rounded-lg py-2 shadow border overflow-hidden">
      <HighchartsReact
        highcharts={Highcharts}
        options={options.trendHistoryOptions}
      />
    </div>
  );
}

export default TrendHistory;
