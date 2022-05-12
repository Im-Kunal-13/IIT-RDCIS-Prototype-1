import React from "react";

export default function InfoCard({
  title,
  value,
  percent,
  increment,
  mode,
  forecast = false,
}) {
  return (
    <div className="bg-white rounded-2xl form-labels shadow border">
        {/* <i class="bi bi-three-dots-vertical"></i> */}
      <div className="bg-white py-4 px-4 relative top-10 transition-all rounded-2xl shadow mx-4 hover:scale-110 cursor-pointer">
        <p className="font-bold text-lg">{title}</p>
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
          <div>
            <span
              className={`
              ${increment && mode === "increment" && "bg-infoCardLightGreen text-infoCardDarkGreen"}
              ${!increment && mode === "decrement" && "bg-infoCardLightRed text-infoCardDarkRed"}
              ${mode === "info" && "bg-yellow-100 text-yellow-400"}
              ${mode === "forecast" && "bg-blue-200 text-lightBlue2"}
px-2 py-1 rounded-md text-center`}
            >
              {forecast
                ? "+ 10 features"
                : `${increment ? "+" : "-"} ${percent}%`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
