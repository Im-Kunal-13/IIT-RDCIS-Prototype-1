const path = require('path')
// Requiring Express
const express = require("express")
// Importing http.
const http = require("http");
// Requiring Colors through which we can apply different colors to console outputs.
const colors = require("colors")
// Requiring dotenv to use environment variables.
const dotenv = require('dotenv').config()
// Error Handler Middleware which we created that overrides the default express error handler. 
const {errorHandler} = require("./middleware/errorMiddleware")
// Function to connect to the database. 
const connectDB = require("./config/db")
// Importing mongoose object 
const mongoose = require("mongoose");
// Importing cors
const cors = require("cors")
// For some reason if one of the ports doesn't work, then the other will be used. 
const port = process.env.PORT || 5000
//Importing admin routes
const adminRoutes = require("./routes/adminRoutes")
// Importing data routes
const dataRoutes = require("./routes/dataRoutes")
// Importing the class 'Server' from socket.io
const { Server } = require("socket.io");

// As soon as we start the server, we call the function to connect to the Mongo DB database. 
//Todo -> Use this function below and keep the mongoose object so we can use it in this program. 
// connectDB()

// Initializing express.
const app = express()

// Using cors
app.use(cors())

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

app.use(express.static(__dirname + '/public'));

// Activating Body Parser in express
app.use(express.json())
// Activating http headers to use url encoded json.
app.use(express.urlencoded({extended: false}))

// admins routes appended with further routes 
app.use("/api/admins", adminRoutes)
// admins routes appended with further routes
app.use("/api/analytics", dataRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  

// This will overirde the default express errorHandler.
app.use(errorHandler)

// Listening to the port which we set up. 
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})


// SOCKET IO SETUP

//connect to db
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Mongo db connection string.
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected".cyan.underline);

  // console.log("Setting change streams...".green);
  // const thoughtChangeStream = connection.collection("analytics").watch();

  // thoughtChangeStream.on("change", (change) => {
  //   switch (change.operationType) {
  //     case "insert":
  //       console.log(`Document with id ${change.fullDocument._id} has been inserted.`)
  //       // console.log("New Data Inserted.");
  //       io.emit("analytics_newData", change.fullDocument);
  //       break;

  //     case "delete":
  //       io.of("/api/socket").emit("deletedThought", change.documentKey._id);
  //       break;
  //   }
  // });
});
