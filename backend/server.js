const path = require("path");
// Requiring Express
const express = require("express");
// Importing http.
const http = require("http");
// Requiring Colors through which we can apply different colors to console outputs.
const colors = require("colors");
// Requiring dotenv to use environment variables.
require("dotenv").config();
// Error Handler Middleware which we created that overrides the default express error handler.
const { errorHandler } = require("./middleware/errorMiddleware");
// Importing mongoose object
const mongoose = require("mongoose");
// Importing cors
const cors = require("cors");
// For some reason if one of the ports doesn't work, then the other will be used.
const port = process.env.PORT || 5000;
//Importing admin routes
const adminRoutes = require("./routes/adminRoutes");
// Importing data routes
const dataRoutes = require("./routes/dataRoutes");
// Importing log routes
const logRoutes = require("./routes/logRoutes");
// Importing the class 'Server' from socket.io
const { Server } = require("socket.io");
// Importing the get log function from the log controller.
const { postLog } = require("./controllers/logController");
// Importing the threshold values from constants
const {thresholds} = require("./constants/constants")

// Taking twilio accountSid and authToken from the environment variables. 
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

// Creating a twiloio
const client = require("twilio")(accountSid, authToken, {
  lazyLoading: true,
});

// Initializing express.
const app = express();

// Using cors
app.use(cors());

// Creating the server from http and the intialized express
const server = http.createServer(app);

// Initializing the variable io which will be used to do anything related to socket io.
const io = new Server(server, {
  // Setting the cors properties here.
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(express.static(__dirname + "/public"));

// Activating Body Parser in express
app.use(express.json());
// Activating http headers to use url encoded json.
app.use(express.urlencoded({ extended: false }));

// admins routes appended with further routes
app.use("/api/admins", adminRoutes);
// admins routes appended with further routes
app.use("/api/analytics", dataRoutes);
// admins routes appended with further routes
app.use("/api/logs", logRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// This will overirde the default express errorHandler.
app.use(errorHandler);

// Listening to the port which we set up.
server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

// SOCKET IO SETUP
//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongo db connection string.
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected".cyan.underline);

  console.log("Setting change streams...".yellow);
  const thoughtChangeStream = connection.collection("analytics").watch();

  thoughtChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        // Sending sendTextMessage function when smsInterval is false.
        if (!smsInterval) {
          verifyDocThreshold(change.fullDocument);
        }
        console.log(
          `Document with id ${change.fullDocument._id} has been inserted.`
        );
        // console.log("New Data Inserted.");
        io.emit("analytics_newData", change.fullDocument);
        break;

      case "delete":
        io.of("/api/socket").emit("deletedThought", change.documentKey._id);
        break;
    }
  });
});

// Function to verify the threshold values of the document entered.
const verifyDocThreshold = (fullDoc) => {
  let features = [];

  if (fullDoc.total_acceleration_avg > thresholds.total_acceleration_avg) {
    features.push({
      label: "Total Acceleration",
      value: fullDoc.total_acceleration_avg,
      stage: "failed",
    });
  }
  if (fullDoc.axial_velocity_avg > thresholds.axial_velocity_avg) {
    features.push({
      label: "Axial Velocity",
      value: fullDoc.axial_velocity_avg,
      stage: "failed",
    });
  }
  if (fullDoc.horizontal_velocity_avg > thresholds.horizontal_velocity_avg) {
    features.push({
      label: "Horizontal Velocity",
      value: fullDoc.horizontal_velocity_avg,
      stage: "failed",
    });
  }
  if (fullDoc.audio_avg > thresholds.audio_avg) {
    features.push({
      label: "Audio",
      value: fullDoc.audio_avg,
      stage: "failed",
    });
  }
  if (fullDoc.angular_misalignment_avg > thresholds.angular_misalignment_avg) {
    features.push({
      label: "Angular Misalignment",
      value: fullDoc.angular_misalignment_avg,
      stage: "failed",
    });
  }
  if (fullDoc.looseness_avg > thresholds.looseness_avg) {
    features.push({
      label: "Looseness",
      value: fullDoc.looseness_avg,
      stage: "failed",
    });
  }
  if (
    fullDoc.parallel_misalignment_avg > thresholds.parallel_misalignment_avg
  ) {
    features.push({
      label: "Parallel Misalignment",
      value: fullDoc.parallel_misalignment_avg,
      stage: "failed",
    });
  }
  if (fullDoc.bearing_fault_bsf_avg > thresholds.bearing_fault_bsf_avg) {
    features.push({
      label: "Bearing Fault BSF",
      value: fullDoc.bearing_fault_bsf_avg,
      stage: "failed",
    });
  }
  if (fullDoc.bearing_fault_ftf_avg > thresholds.bearing_fault_ftf_avg) {
    features.push({
      label: "Bearing Fault FTF",
      value: fullDoc.bearing_fault_ftf_avg,
      stage: "failed",
    });
  }
  if (fullDoc.bearing_fault_bpfo_avg > thresholds.bearing_fault_bpfo_avg) {
    features.push({
      label: "Bearing Fault BPFO",
      value: fullDoc.bearing_fault_bpfo_avg,
      stage: "failed",
    });
  }
  if (fullDoc.bearing_fault_bpfi_avg > thresholds.bearing_fault_bpfi_avg) {
    features.push({
      label: "Bearing Fault BPFI",
      value: fullDoc.bearing_fault_bpfi_avg,
      stage: "failed",
    });
  }

  if (features.length) {
    let msg = `Machine - ${fullDoc.machine}\nMonitor - ${fullDoc.monitor}\nID ${fullDoc._id}\n\nExceeded threshold values ⬇️\n`;
    for (i = 0; i < features.length; i++) {
      msg += `${features[i].label} - ${features[i].value}\n`;
    }
    sendTextMessage(msg);
    postLog({
      machine: fullDoc.machine,
      monitor: fullDoc.monitor,
      data_id: fullDoc._id,
      features: features,
      timestamp: fullDoc.time,
    });
  }
};

// Using a variable to keep track of the sms interval time.
let smsInterval = false;

// Function to send sms notification.
const sendTextMessage = (msg) => {
  client.messages
    .create({
      body: `\nEYE-VIB  »  Analytics\nSubject: Warning Alert\n\n${msg}`,
      from: "+19793253709",
      to: "+919064691751",
    })
    .then((message) => console.log(`Sms with id ${message.sid} has been send`));

  // Setting smsInterval to true once one sms gets sent.
  smsInterval = true;

  // Setting the smsInterval back to false after some time so that it again can send messages.
  setTimeout(() => {
    smsInterval = false;
  }, 10000);
};
