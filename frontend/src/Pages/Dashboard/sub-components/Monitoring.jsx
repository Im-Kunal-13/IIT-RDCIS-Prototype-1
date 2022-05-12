import React from "react";
import MonitoringOffCanvas from "./MonitoringOffCanvas";
import MonitoringTab from "./MonitoringTab";
import TrendHistory from "./TrendHistory";
import Tilt from "react-parallax-tilt";
import InstantateousParameters from "./InstantateousParameters";
import InfoCard from "./InfoCard";
import MaintenanceIndex from "./MaintenanceIndex";

export default function Monitoring() {
  return (
    // <div className="bg-bgGray px-4 pt-3 min-h-screen">
    //   <InstantateousParameters />
    // </div>
    <div className="bg-bgGray pt-3 min-h-screen">
      <MonitoringTab />
      {/* ANALYTICS CONTENT GRID */}
      <div className="grid grid-cols-2 gap-4 md:px-4">
        {/* INFO CARDS SECTION  */}
        <div
          className="grid grid-cols-4 xl2:gap-5 md:gap-4 col-span-2"
          style={{ marginBottom: "2rem" }}
        >
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
            <InfoCard
              title={"Total Alarms"}
              value={`14`}
              percent={`11.7`}
              mode={"decrement"}
              increment={false}
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
            <InfoCard
              title={"Alarms Closed"}
              value={`6`}
              percent={`22.7`}
              mode={"increment"}
              increment={true}
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full  md:mb-0 mb-14">
            <InfoCard
              title={"False Alarms Set"}
              value={`2`}
              percent={`10.3`}
              mode={"info"}
              increment={true}
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full">
            <InfoCard
              title={"Alarms Forecast"}
              value={`6`}
              percent={`22.7`}
              mode={"forecast"}
              forecast={true}
              increment={true}
            />
          </div>
        </div>
        {/* TREND HISTORY  */}
        <div className="col-span-2 lg2:col-span-1">
          <Tilt
            glareEnable={true}
            glareColor="#015FF3"
            glareMaxOpacity={0.3}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <TrendHistory />
          </Tilt>
        </div>
        <div className="grid grid-cols-4 gap-4 col-span-2 lg2:col-span-1">
          {/* INSTATATEOUS PARAMETER  */}
          <div className="lg2:col-span1 sm:col-span-2 col-span-4">
            <Tilt
              glareEnable={true}
              glareColor="#015FF3"
              glareMaxOpacity={0.3}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glarePosition="all"
              glareBorderRadius="8px"
            >
              <InstantateousParameters
                name={"Total Acceleration(m/s²)²(rms)"}
              />
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#015FF3"
              glareMaxOpacity={0.3}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glarePosition="all"
              glareBorderRadius="8px"
            >
              <InstantateousParameters
                name={"Total Acceleration(m/s²)²(rms)"}
              />
            </Tilt>
          </div>
          {/* MAINTENANCE INDEX  */}
          <div className="lg2:col-span1 sm:col-span-2 col-span-4">
            <MaintenanceIndex />
          </div>
        </div>
      </div>
      {/* OFF CANVAS SKELETON  */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="flex content-between items-center offcanvas-header">
          <div className="flex items-center">
            <img src={require("./iit-logo.png")} alt="" className="w-12 pr-2" />
            <h1 className="font-semibold text-2xl text-white">EyeVib</h1>
          </div>
          <button
            type="button"
            className="flex items-center justify-center transition-all hover:scale-110"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg text-2xl py-1 px-2 text-white bg-nav2Hover rounded-lg hover:bg-red-600 shadow shadow-white"></i>
          </button>
        </div>
        <MonitoringOffCanvas />
      </div>
    </div>
  );
}
