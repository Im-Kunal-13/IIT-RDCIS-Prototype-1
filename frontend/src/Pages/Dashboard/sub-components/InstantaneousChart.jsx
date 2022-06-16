import React, { useContext, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Select from "react-select";
import { useState } from "react";
import InstantateousParameter from "./InstantateousParameter";
// Import css files for React Slice
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ThemeContext from "../../../context/theme/themeContext";
import InstantateousParameterMin from "./InstantateousParameterMin";

export default function InstantaneousChart({ instantaneousDataDoc }) {
  // INITIALIZATIONS
  // Theme
  const theme = useContext(ThemeContext);

  // Slick Next Arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-next rounded-full transition-all ${
          theme.state === "purple"
            ? "shadow-carouselArrowHoverPurple"
            : "shadow-carouselArrowHoverBlue"
        }`}
        onClick={onClick}
      >
        <i
          className={`bi bi-caret-right-fill text-lg ${
            theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"
          }`}
        ></i>
        <i
          className={`bi bi-caret-right-fill text-xs ${
            theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"
          }`}
        ></i>
      </div>
    );
  }
  // Slick Previous Arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-prev rounded-full transition-all ${
          theme.state === "purple"
            ? "shadow-carouselArrowHoverPurple"
            : "shadow-carouselArrowHoverBlue"
        }`}
        onClick={onClick}
      >
        <i
          className={`bi bi-caret-left-fill text-xs ${
            theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"
          }`}
        ></i>
        <i
          className={`bi bi-caret-left-fill text-lg ${
            theme.state === "purple" ? "text-themeBlue1" : "text-lightBlue2"
          }`}
        ></i>
      </div>
    );
  }

  // React-Select Custom Styles.
  const colorStyles = {
    option: (styles, { isFocused, isSelected, isActive }) => ({
      ...styles,
      background:
        isFocused & !isSelected
          ? `${
              theme.state === "purple"
                ? "rgb(187, 1, 255, .2)"
                : "rgb(1, 95, 243, .2);"
            }`
          : isSelected
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : isActive
          ? `${theme.state === "purple" ? "#BA01FF" : "#015ff3;"}`
          : undefined,
      zIndex: 1,
    }),
  };

  const [intervalOption, setIntervalOption] = useState({
    value: "Real-time",
    label: "Real-time",
  });
  const [viewOption, setViewOption] = useState({
    label: "Full",
    value: "Full",
  });

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
    { value: "Real-time", label: "Real-time" },
    { value: "1 Day", label: "1 Day" },
    { value: "1 Month", label: "1 Month" },
    { value: "7 Day", label: "7 Day" },
  ];
  //   VIEW SELECT OPTIONS
  const viewOptions = [
    { value: "Full", label: "Full" },
    { value: "Carousel", label: "Carousel" },
  ];
  // State for no of slides to show
  const [slidesToShow, setSlidesToShow] = useState(4);
  // State for the dot to show or not
  const [isDotActive, setIsDotActive] = useState(true);

  // FUNCTIONS
  // Window load and resize event listener
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 950 && window.innerWidth < 1200) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 640 && window.innerWidth < 950) {
      setSlidesToShow(2);
    } else if (window.innerWidth < 640) {
      setSlidesToShow(1);
    }
    if (window.innerWidth < 365) {
      setIsDotActive(false);
    } else {
      setIsDotActive(true);
    }
  });
  window.addEventListener("load", () => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 950 && window.innerWidth < 1200) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 640 && window.innerWidth < 950) {
      setSlidesToShow(2);
    } else if (window.innerWidth < 640) {
      setSlidesToShow(1);
    }
    if (window.innerWidth < 365) {
      setIsDotActive(false);
    } else {
      setIsDotActive(true);
    }
  });

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 950 && window.innerWidth < 1200) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 640 && window.innerWidth < 950) {
      setSlidesToShow(2);
    } else if (window.innerWidth < 640) {
      setSlidesToShow(1);
    }
    if (window.innerWidth < 365) {
      setIsDotActive(false);
    } else {
      setIsDotActive(true);
    }
  }, []);

  return (
    <div
      className={`bg-white rounded-lg p-3 shadow border overflow-hidden ${
        isDotActive ? "pb-5" : ""
      }`}
    >
      {/* TITLE  */}
      <p className="text-xl font-semibold ml-2 mb-4">
        {`Instantaneous Parameters ${isDotActive ? "(HC28-CDE)" : ""}`}
      </p>
      {/* Feature & Interval Dropdowns  */}
      <div className="flex mb-4">
        {/* FEATURES SECTION  */}
        <div className="flex items-center px-2 z-10">
          <p className="mr-2 font-semibold text-gray-400">FEATURES</p>
          <div className="dropdown hover:scale-95 transition-all">
            <div
              className="flex items-center py-2 px-3 justify-between hover:bg-offCanvasHover rounded-md border-2 h-12 shadow w-48 cursor-pointer z-10"
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
                      className={`form-check-input border-2 cursor-pointer mr-3 h-5 w-5 ${
                        theme.state === "purple"
                          ? "checkbox-purple"
                          : "checkbox-blue"
                      }`}
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
        <div className="hidden items-center px-2 z-10 sm:flex">
          <p className="mr-2 font-semibold text-gray-400">INTERVAL</p>
          <div className="flex items-center py-2 px-1 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-48 cursor-pointer z-10">
            <Select
              value={intervalOption}
              onChange={setIntervalOption}
              placeholder="Select Interval"
              styles={colorStyles}
              options={intervalOptions}
            />
            <i className="fa-solid fa-chevron-down text-xs relative right-7"></i>
          </div>
        </div>
        {/* VIEW SECTION  */}
        <div className="hidden items-center mr-2 px-2 z-10 sm:flex">
          <p className="mr-2 font-semibold text-gray-400">VIEW</p>
          <div className="flex items-center py-2 px-1 hover:bg-offCanvasHover rounded-md border-2 h-12 shadow hover:scale-95 transition-all w-48 cursor-pointer z-10">
            <Select
              value={viewOption}
              onChange={setViewOption}
              placeholder="Select Interval"
              options={viewOptions}
              styles={colorStyles}
            />
            <i className="fa-solid fa-chevron-down text-xs relative right-7"></i>
          </div>
        </div>
      </div>
      {/* GAUGES  */}
      {viewOption.value === "Carousel" ? (
        <Slider
          slidesToScroll={1}
          dots={isDotActive}
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={5000}
          focusOnSelect={false}
          slidesToShow={slidesToShow}
          swipeToSlide={true}
          pauseOnFocus={true}
          pauseOnHover={true}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Total Acceleration ((m/sÂ²)Â²)"}
              gaugeData={instantaneousDataDoc?.total_acceleration_avg}
              bands={[0, 150, 700, 900, 1080]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Axial Velocity (mm/s)"}
              gaugeData={instantaneousDataDoc?.axial_velocity_avg}
              bands={[0, 5.5, 10.5, 15, 19]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Horizontal Velocity (mm/s)"}
              gaugeData={instantaneousDataDoc?.horizontal_velocity_avg}
              bands={[0, 5.5, 10.5, 15, 19]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Audio (dB)"}
              gaugeData={instantaneousDataDoc?.audio_avg}
              bands={[0, 125, 140, 160, 192]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Angular Misalignment (mm/s)"}
              gaugeData={instantaneousDataDoc?.angular_misalignment_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Looseness Min (mm/s)"}
              gaugeData={instantaneousDataDoc?.looseness_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Parallel Misalignment (mm/s)"}
              gaugeData={instantaneousDataDoc?.parallel_misalignment_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Bearing Fault BSF (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bsf_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Bearing Fault BPFO (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bpfo_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Bearing Fault FTF (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_ftf_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
          <Tilt
            glareEnable={true}
            glareColor="#015F"
            glareMaxOpacity={0}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <InstantateousParameter
              name={"Bearing Fault BPFI (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bpfi_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
            />
          </Tilt>
        </Slider>
      ) : (
        <div className="grid grid-cols-5">
          <div>
            <InstantateousParameterMin
              name={"Total Acceleration ((m/sÂ²)Â²)"}
              gaugeData={instantaneousDataDoc?.total_acceleration_avg}
              bands={[0, 150, 700, 900, 1080]}
              label="Total Acceleration"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Axial Velocity (mm/s)"}
              gaugeData={instantaneousDataDoc?.axial_velocity_avg}
              bands={[0, 5.5, 10.5, 15, 19]}
              label="Axial Velocity"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Horizontal Velocity (mm/s)"}
              gaugeData={instantaneousDataDoc?.horizontal_velocity_avg}
              bands={[0, 5.5, 10.5, 15, 19]}
              label="Horizontal Velocity"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Audio (dB)"}
              gaugeData={instantaneousDataDoc?.audio_avg}
              bands={[0, 125, 140, 160, 192]}
              label="Audio"
              unit="dB"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Angular Misalignment (mm/s)"}
              gaugeData={instantaneousDataDoc?.angular_misalignment_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Angular Misalignment"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Looseness Min (mm/s)"}
              gaugeData={instantaneousDataDoc?.looseness_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Looseness Min"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Parallel Misalignment (mm/s)"}
              gaugeData={instantaneousDataDoc?.parallel_misalignment_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Parallel Misalignment"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Bearing Fault BSF (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bsf_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Bearing Fault BSF"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Bearing Fault BPFO (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bpfo_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Bearing Fault BPFO"
              unit="mm/s"
            />
          </div>
          <div>
            <InstantateousParameterMin
              name={"Bearing Fault FTF (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_ftf_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Bearing Fault FTF"
              unit="mm/s"
            />
          </div>
          <div className="hidden">
            <InstantateousParameterMin
              name={"Bearing Fault BPFI (mm/s)"}
              gaugeData={instantaneousDataDoc?.bearing_fault_bpfi_avg}
              bands={[0, 1.5, 7, 11.5, 13.8]}
              label="Bearing Fault BPFI"
              unit="mm/s"
            />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
