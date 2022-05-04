import System from "systemjs"

(function (global) {
  System.config({
    paths: {
      "syncfusion:": "./node_modules/@syncfusion/",
    },
    map: {
      app: "app",

      //Syncfusion packages mapping
      "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
      "@syncfusion/ej2-circulargauge":
        "syncfusion:ej2-circulargauge/dist/ej2-circulargauge.umd.min.js",
      "@syncfusion/ej2-buttons":
        "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
      "@syncfusion/ej2-popups":
        "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
      "@syncfusion/ej2-react-base":
        "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
      "@syncfusion/ej2-react-circulargauge":
        "syncfusion:ej2-react-circulargauge/dist/ej2-react-circulargauge.umd.min.js",
      "@syncfusion/ej2-react-buttons":
        "syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
      "@syncfusion/ej2-react-popups":
        "syncfusion:ej2-react-popups/dist/ej2-react-popups.umd.min.js",
    },
    packages: {
      app: { main: "index", defaultExtension: "jsx" },
    },
  });
})(this);
