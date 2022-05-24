import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function InfoCard({
  title,
  value,
  percent,
  increment,
  mode,
  forecast = false,
  delay
}) {
  return (
    <div className="rounded-2xl form-labels shadow border">
      {/* <i class="bi bi-three-dots-vertical"></i> */}
      <div className="bg-white py-4 pl-4 relative top-10 transition-all rounded-2xl shadow mx-4 hover:scale-110 cursor-pointer flex justify-between card-rotate" style={{borderBottom: "6px solid #E8EAFB", animationDelay: delay}}>
        <div className="block w-4/5">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">{title}</p>
            <div className="w-9 h-9 relative left-8">
              <CircularProgressbar
                value={parseFloat(percent)}
                text={percent.slice(1)}
                strokeWidth={12}
                className="font-bold"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "25px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `${
                    !increment && mode === "decrement" ? "#FF0022" : ""
                  }
                  ${increment && mode === "increment" ? "#31E802" : ""}
                  ${mode === "forecast" ? "#015FF3" : ""}
                  ${mode === "info" ? "rgb(255, 215, 0)" : ""}`,
                  textColor: `black`,
                  trailColor: "rgba(0, 0, 0, 0.110)",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={`${
                increment && mode === "increment" && "text-infoCardDarkGreen"
              }
              ${!increment && mode === "decrement" && "text-infoCardDarkRed"}
              ${mode === "info" && "text-yellow-300"}
              font-semibold text-6xl`}
            >
              {forecast ? (
                <i className="bi bi-box-arrow-in-up-right text-lightBlue2"></i>
              ) : (
                value
              )}
            </p>
            <div className="relative top-2">
              <span
                className={`relative left-6
              ${
                increment &&
                mode === "increment" &&
                "bg-infoCardLightGreen text-infoCardDarkGreen"
              }
              ${
                !increment &&
                mode === "decrement" &&
                "bg-infoCardLightRed text-infoCardDarkRed"
              }
              ${mode === "info" && "bg-yellow-100 text-yellow-400"}
              ${mode === "forecast" && "bg-blue-200 text-lightBlue2"}
px-2 py-1 rounded-md text-center`}
              >
                {forecast ? "+ 10 features" : `${percent}%`}
              </span>
            </div>
          </div>
        </div>
        {/* Side card design  */}
        <span
          className={`w-4 h-20 my-auto rounded-l-full shadow-cardCut   ${
            increment && mode === "increment" && "bg-infoCardDarkGreen"
          }
              ${!increment && mode === "decrement" && "bg-infoCardDarkRed"}
              ${mode === "info" && "bg-yellow-300"}
              ${mode === "forecast" && "bg-lightBlue2"}`}
        />
      </div>
    </div>
  );
}
