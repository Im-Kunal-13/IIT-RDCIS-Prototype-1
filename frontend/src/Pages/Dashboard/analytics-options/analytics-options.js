const trendHistoryOptions = (analyticsData, selectedFeature) => ({
  rangeSelector: {
    selected: 1,
  },
  plotOptions: {
    stacking: "normal",
    borderColor: null,
  },
  legend: {
    align: "left",
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 4,
  },
  title: {
    text: '<div class="font-semibold relative right-10">Trend History (HC28-CDE)</div>',
    align: "left",
    margin: 100,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    title: {
      enabled: false,
    },
  },
  xAxis: {
    type: "category",
    labels: {
      align: "right",
      x: 45,
      step: 20,
    },
  },
  series: [
    {
      name: "Total Acceleration",
      data: analyticsData.totalAcceleration,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      // visible: selectedFeature == "Total Acceleration",
    },
    {
      name: "Axial Velocity",
      data: analyticsData.axialVelocity,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Vertical Velocity",
      data: analyticsData.verticalVelocity,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Horizontal Velocity",
      data: analyticsData.horizontalVelocity,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Temperature",
      data: analyticsData.temperature,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Audio",
      data: analyticsData.audio,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Bearing Fault BPFI",
      data: analyticsData.bearingFaultBpfi,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Bearing Fault BPFO",
      data: analyticsData.bearingFaultBpfo,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Bearing Fault BSF",
      data: analyticsData.bearingFaultBsf,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Bearing Fault FTF",
      data: analyticsData.bearingFaultFtf,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Looseness",
      data: analyticsData.looseness,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Parallel Misalignment",
      data: analyticsData.parallelMisalignment,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    },
    {
      name: "Angular Misalignment",
      data: analyticsData.angularMisalignment,
      type: "spline",
      tooltip: {
        valueDecimals: 2,
      },
      visible: false,
    }
  ],
});

const gaugeOptions = (gaugeData, bands) => ({
  chart: {
    type: "gauge",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  plotOptions: {
    gauge: {
      pivot: {
        radius: 7,
        borderWidth: 0,
        backgroundColor: "transparent",
      },
    },
  },

  title: {
    text: "",
    align: "left",
    margin: -60,
  },
  credits: {
    enabled: false,
  },
  pane: {
    startAngle: -130,
    endAngle: 130,
    size: "95%",
    background: [
      {
        backgroundColor: "transparent",
        borderWidth: 0,
        outerRadius: "0%",
        innerRadius: "110%",
      },
    ],
  },

  // the value axis
  yAxis: {
    min: 0,
    max: bands[4],

    minorTicks: false,
    // minorTickInterval: "auto",
    // minorTickWidth: 1,
    // minorTickLength: 10,
    // minorTickPosition: "inside",
    // minorTickColor: "#666",

    tickPixelInterval: 60,
    tickWidth: 2,
    tickPosition: "inside",
    tickLength: 10,
    tickColor: "#FFF",
    labels: {
      step: 1,
      rotation: "auto",
    },
    title: {
      text: "mm/s",
      style: {
        fontWeight: "bold",
      },
    },
    plotBands: [
      // MAIN COLOR PLOT BANDS
      {
        from: bands[0],
        to: bands[1],
        color: "#015FF3", // green
      },
      {
        from: bands[1],
        to: bands[2],
        color: "rgb(34, 197, 94)", // yellow
      },
      {
        from: bands[2],
        to: bands[3],
        color: "rgb(234, 179, 8)", // red
      },
      {
        from: bands[3],
        to: bands[4],
        color: "rgb(239, 68, 68)", // red
      },
      // OUTER  PLOT BAND
      {
        from: 0,
        to: bands[4],
        color: "rgb(209, 213, 219)", // red
        innerRadius: "105%",
        // thickness: 30,
        outerRadius: "113 %",
      },
    ],
  },

  series: [
    {
      name: "Speed",
      data: [Math.round((gaugeData + Number.EPSILON) * 100) / 100],
      rounded: true,
      dataLabels: {
        verticalAlign: "bottom",
        y: 100,
        borderWidth: 0,
        useHtml: true,
        style: {
          fontSize: "30px",
          fontWeight: "bold",
        },
      },
      dial: {
        backgroundColor: "#58585E",
        baseWidth: 5,
        topWidth: 2,
        baseLength: "70%",
        rearLength: "5%",
        radius: "75%",
      },
      tooltip: {
        valueSuffix: "mm/s",
      },
    },
  ],
});

const maintenanceOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '<div class="font-semibold relative right-10">Maintenance Index</div>',
    align: "left",
    margin: -10,
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Idle",
          y: 40,
          color: "#015FF3",
          sliced: true,
          // selected: true,
        },
        {
          name: "Operational",
          y: 25,
          color: "#31E802",
        },
        {
          name: "Caution",
          y: 10,
          color: "#ffc107",
        },
        {
          name: "Warning",
          y: 5,
          color: "#FF0022",
        },
        {
          name: "Disconnected",
          y: 20,
          color: "#9e9e9e",
        },
      ],
    },
  ],
};

const options = {
  trendHistoryOptions,
  gaugeOptions,
  maintenanceOptions,
};

export default options;
