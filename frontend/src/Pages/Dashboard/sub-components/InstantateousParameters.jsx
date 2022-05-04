import React, {useEffect} from "react";
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

export default function InstantateousParameters({name}) {
  return (
    <div className="bg-white rounded-lg py-3 px-4 shadow border overflow-hidden" style={{height: "325px"}}>
      <div className="default">
        <HighchartsReact
          containerProps={{ style: { height: "300px" } }}
          highcharts={Highcharts}
          options={options.gaugeOptions}
        />
      <div className="text-center relative bottom-8 font-semibold">{name}</div>
      </div>
    </div>
  );
}
