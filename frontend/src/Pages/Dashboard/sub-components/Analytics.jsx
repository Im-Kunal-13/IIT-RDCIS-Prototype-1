import MonitoringTab from "./MonitoringTab";
import TrendHistory from "./TrendHistory";
import Tilt from "react-parallax-tilt";
import InfoCard from "./InfoCard";
import MaintenanceIndex from "./MaintenanceIndex";
import InstantaneousChart from "./InstantaneousChart";
import { reset, getData } from "../../../features/analytics/analyticSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import ScatterPlot from "./ScatterPlot";
import Waterfall from "./Waterfall";
import DetailsPanel from "./DetailsPanel";

// Getting the socket from the io object we imported.
const socket = io.connect("http://localhost:5000");

export default function Analytics() {
  const dispatch = useDispatch();

  // Charts all data state
  const [dataState, setDataState] = useState([]);

  // Separated Charts Data State
  const [analyticsData, setAnalyticsData] = useState(0);

  // Destructuring data.
  const { data, dataError, dataSuccess, dataIsLoading, dataMessage } =
    useSelector((state) => state.analytics);

  // Separating the data and putting into the useState object when dataSuccess is true
  useEffect(() => {
    if (dataSuccess) {
      setDataState(data);

      // Total Acceleration
      let totalAcceleration = data.map((doc, index) => {
        return [doc.time, doc.total_acceleration_avg];
      });

      // Axial Velocity
      let axialVelocity = data.map((doc, index) => {
        return [doc.time, doc.axial_velocity_avg];
      });

      // Vertical Velocity
      let verticalVelocity = data.map((doc, index) => {
        return [doc.time, doc.vertical_velocity_avg];
      });

      // Horizontal Velocity
      let horizontalVelocity = data.map((doc, index) => {
        return [doc.time, doc.horizontal_velocity_avg];
      });

      // Temperature
      let temperature = data.map((doc, index) => {
        return [doc.time, doc.temperature_avg];
      });

      // Audio
      let audio = data.map((doc, index) => {
        return [doc.time, doc.audio_avg];
      });

      // Angular Misalignment
      let angularMisalignment = data.map((doc, index) => {
        return [doc.time, doc.angular_misalignment_avg];
      });

      // Bearing Fault Bpfi
      let bearingFaultBpfi = data.map((doc, index) => {
        return [doc.time, doc.bearing_fault_bpfi_avg];
      });

      // Bearing Fault Bpf0
      let bearingFaultBpfo = data.map((doc, index) => {
        return [doc.time, doc.bearing_fault_bpfo_avg];
      });

      // Bearing Fault Bsf
      let bearingFaultBsf = data.map((doc, index) => {
        return [doc.time, doc.bearing_fault_bsf_avg];
      });

      // Bearing Fault Ftf
      let bearingFaultFtf = data.map((doc, index) => {
        return [doc.time, doc.bearing_fault_ftf_avg];
      });

      // Looseness
      let looseness = data.map((doc, index) => {
        return [doc.time, doc.looseness_avg];
      });

      // Parallel Misalignment
      let parallelMisalignment = data.map((doc, index) => {
        return [doc.time, doc.parallel_misalignment_avg];
      });

      setAnalyticsData({
        totalAcceleration: totalAcceleration.slice(-150),
        axialVelocity: axialVelocity.slice(-150),
        verticalVelocity: verticalVelocity.slice(-150),
        horizontalVelocity: horizontalVelocity.slice(-150),
        temperature: temperature.slice(-150),
        audio: audio.slice(-150),
        angularMisalignment: angularMisalignment.slice(-150),
        bearingFaultBpfi: bearingFaultBpfi.slice(-150),
        bearingFaultBpfo: bearingFaultBpfo.slice(-150),
        bearingFaultBsf: bearingFaultBsf.slice(-150),
        bearingFaultFtf: bearingFaultFtf.slice(-150),
        looseness: looseness.slice(-150),
        parallelMisalignment: parallelMisalignment.slice(-150),
      });
    }
  }, [dataSuccess]);

  // Getting all the Monitoring Data once we enter the Dashboard Route.
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // Initializing the id of the current document entered as null
  let currentDocId = null;
  // Socket io Event Listener
  useEffect(() => {
    // Event for new Data Insert in the Analytics Collection
    socket.on("analytics_newData", (analyticsNewDataDoc) => {
      if (currentDocId !== analyticsNewDataDoc._id) {
        currentDocId = analyticsNewDataDoc._id;

        if (data && dataState.length && analyticsData) {
          setDataState((prevState) => prevState.concat([analyticsNewDataDoc]));
          // Total Acceleration
          let totalAcceleration = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.total_acceleration_avg,
            ],
          ];

          // Axial Velocity
          let axialVelocity = [
            [analyticsNewDataDoc.time, analyticsNewDataDoc.axial_velocity_avg],
          ];

          // Vertical Velocity
          let verticalVelocity = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.vertical_velocity_avg,
            ],
          ];

          // Horizontal Velocity
          let horizontalVelocity = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.horizontal_velocity_avg,
            ],
          ];

          // Temperature
          let temperature = [
            [analyticsNewDataDoc.time, analyticsNewDataDoc.temperature_avg],
          ];

          // Audio
          let audio = [
            [analyticsNewDataDoc.time, analyticsNewDataDoc.audio_avg],
          ];

          // Angular Misalignment
          let angularMisalignment = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.angular_misalignment_avg,
            ],
          ];

          // Bearing Fault Bpfi
          let bearingFaultBpfi = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.bearing_fault_bpfi_avg,
            ],
          ];

          // Bearing Fault Bpf0
          let bearingFaultBpfo = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.bearing_fault_bpfo_avg,
            ],
          ];

          // Bearing Fault Bsf
          let bearingFaultBsf = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.bearing_fault_bsf_avg,
            ],
          ];

          // Bearing Fault Ftf
          let bearingFaultFtf = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.bearing_fault_ftf_avg,
            ],
          ];

          // Looseness
          let looseness = [
            [analyticsNewDataDoc.time, analyticsNewDataDoc.looseness_avg],
          ];

          // Parallel Misalignment
          let parallelMisalignment = [
            [
              analyticsNewDataDoc.time,
              analyticsNewDataDoc.parallel_misalignment_avg,
            ],
          ];
          setAnalyticsData({
            ...analyticsData,
            totalAcceleration: analyticsData.totalAcceleration
              .concat(totalAcceleration)
              .slice(-150),
            axialVelocity: analyticsData.axialVelocity
              .concat(axialVelocity)
              .slice(-150),
            verticalVelocity: analyticsData.verticalVelocity
              .concat(verticalVelocity)
              .slice(-150),
            horizontalVelocity: analyticsData.horizontalVelocity
              .concat(horizontalVelocity)
              .slice(-150),
            temperature: analyticsData.temperature
              .concat(temperature)
              .slice(-150),
            audio: analyticsData.audio.concat(audio).slice(-150),
            angularMisalignment: analyticsData.angularMisalignment
              .concat(angularMisalignment)
              .slice(-150),
            bearingFaultBpfi: analyticsData.bearingFaultBpfi
              .concat(bearingFaultBpfi)
              .slice(-150),
            bearingFaultBpfo: analyticsData.bearingFaultBpfo
              .concat(bearingFaultBpfo)
              .slice(-150),
            bearingFaultBsf: analyticsData.bearingFaultBsf
              .concat(bearingFaultBsf)
              .slice(-150),
            bearingFaultFtf: analyticsData.bearingFaultFtf
              .concat(bearingFaultFtf)
              .slice(-150),
            looseness: analyticsData.looseness.concat(looseness).slice(-150),
            parallelMisalignment: analyticsData.parallelMisalignment
              .concat(parallelMisalignment)
              .slice(-150),
          });
        }
      }
    });
  }, [socket, data]);
  return (
    <div>
      <MonitoringTab />
      {/* ANALYTICS CONTENT GRID */}
      <div className="grid grid-cols-4 gap-4 md:px-4">
        {/* INFO CARDS SECTION  */}
        <div
          className="grid grid-cols-4 xl2:gap-5 md:gap-4 col-span-4"
          style={{ marginBottom: "2rem" }}
        >
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
            <InfoCard
              title={"Total Alarms"}
              value={`14`}
              percent={`-11.7`}
              mode={"decrement"}
              increment={false}
              delay="0s"
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full lg2:mb-0 md:mb-10 mb-14">
            <InfoCard
              title={"Alarms Closed"}
              value={`6`}
              percent={`+22.7`}
              mode={"increment"}
              increment={true}
              delay=".3s"
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full  md:mb-0 mb-14">
            <InfoCard
              title={"False Alarms Set"}
              value={`2`}
              percent={`+10.3`}
              mode={"info"}
              increment={true}
              delay=".6s"
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg2:col-span-1 max-w-sm lg2:mx-0 start:mx-auto w-full">
            <InfoCard
              title={"Alarms Forecast"}
              value={`6`}
              percent={`+19.7`}
              mode={"forecast"}
              forecast={true}
              increment={true}
              delay=".9s"
            />
          </div>
        </div>
        <div className="col-span-4 lg2:col-span-3">
          {/* TREND HISTORY  */}
          <Tilt
            glareEnable={true}
            glareColor="#015FF3"
            glareMaxOpacity={0.1}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <TrendHistory analyticsData={analyticsData} />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareColor="#015FF3"
            glareMaxOpacity={0.1}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <Waterfall analyticsData={analyticsData} />
          </Tilt>
        </div>
        {/* MAINTENANCE INDEX  */}
        <div className="col-span-4 lg2:col-span-1">
          <MaintenanceIndex />
          <Tilt
            glareEnable={true}
            glareColor="#015FF3"
            glareMaxOpacity={0.1}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <DetailsPanel />
          </Tilt>
        </div>
        <div className="col-span-4">
          <InstantaneousChart instantaneousDataDoc={dataState.slice(-1)[0]} />
        </div>
      </div>
    </div>
  );
}
