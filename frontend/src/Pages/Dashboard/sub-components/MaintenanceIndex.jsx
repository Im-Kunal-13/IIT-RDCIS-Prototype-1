import React, { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import options from "../analytics-options/analytics-options";
import Tilt from "react-parallax-tilt";
import Property from "./Property";
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

export default function MaintenanceIndex() {
  const theme = useContext(ThemeContext)
  return (
    <div
      className="bg-white rounded-lg pt-3 pb-3 px-4 shadow border overflow-hidden grid grid-cols-2"
      style={{ height: "" }}
    >
      <div className="lg2:col-span-2 col-span-2 sm:col-span-1 sm:flex sm:items-center sm:justify-center block lg2:block">
        <Tilt
          glareEnable={true}
          glareColor={`${theme.state === "purple" ? "#7944F6" : "#015FF3"}`}
          glareMaxOpacity={0.4}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glarePosition="all"
          glareBorderRadius="8px"
        >
          <div className="default">
            <HighchartsReact
              containerProps={{ style: { height: "350px" } }}
              highcharts={Highcharts}
              options={options.maintenanceOptions(theme.state === "purple" ? "#7944F6" : "#015FF3")}
            />
          </div>
        </Tilt>
      </div>
      <div className="lg2:col-span-2 col-span-2 sm:col-span-1">
        <Tilt
          glareEnable={true}
          glareColor={`${theme.state === "purple" ? "#7944F6" : "#015FF3"}`}  
          glareMaxOpacity={0.4}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glarePosition="all"
          glareBorderRadius="8px"
        >
          <div className="px-3 pt-3">
            <Property
              name="Operational"
              percentage="25.13"
              colorDark="#31E802"
              colorLightClass="bg-infoCardLightGreen"
              paddingBottom={true}
            />
            <Property
              name="Caution"
              percentage="10.11"
              colorDark="#ffc107"
              colorLightClass="bg-yellow-100"
              paddingBottom={true}
            />
            <Property
              name="Warning"
              percentage="5.09"
              colorDark="#FF0022"
              colorLightClass="bg-infoCardLightRed"
              paddingBottom={true}
            />
            <Property
              name="Idle"
              percentage="40.14"
              colorDark={`${theme.state === "purple" ? "#7944F6" : "#015FF3"}`}
              colorLightClass={`${theme.state === "purple" ? "bg-themeBlue1 bg-opacity-25" : "bg-lightBlue1 bg-opacity-25"}`}
              paddingBottom={true}
            />
            <Property
              name="Disconnected"
              percentage="20.16"
              colorDark="#9e9e9e"
              colorLightClass="bg-gray-200"
              paddingBottom={false}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
}
