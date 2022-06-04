// importing Express async handler.
const asyncHandler = require("express-async-handler");
// importing the admin Schema Model for our database.
const Log = require("../models/logModel");

// @Desciption -> Post a new log
// @Access -> Private (Server Code)
const postLog = asyncHandler(async (logDoc) => {
  // Destruction from log document.
  const { machine, monitor, data_id, features, timestamp } = logDoc;

  // If either of them are not present then throwing error.
  if (!machine || !monitor || !data_id || !features || !timestamp) {
    throw new Error("All the log fields are not present.");
  }

  // Create admin with the input data.
  const log = await Log.create(logDoc);

  // Checking if adminf is present.
  if (log) {
    // Sending ok status 201 which means we have entered something.
    console.log(`Log with id ${log._id} has been entered.`);
  } else {
    // Throwing error.
    throw new Error("Log not entered.");
  }
});

// @Desciption -> Get All Logs
// @Route -> GET /api/logs/
// @Access -> Private
const getLogs = asyncHandler(async (req, res) => {
  // Getting the admin from the id set in the req.admin via the middleware.
  const logs = await Log.find();

  res.status(200).json(logs);
});

// @desc    Delete goal
// @route   DELETE /api/admins/:id
// @access  Private
// const deleteUser = asyncHandler(async (req, res) => {
//   const userExists = await Admin.findById(req.params.id);
//   // Chec if an admin exists.
//   if (!userExists) {
//     res.status(400);
//     throw new Error("User not found");
//   }

//   // Check for user
//   if (!req.admin) {
//     res.status(401);
//     throw new Error("Admin not logged in.");
//   }

//   await userExists.remove();

//   res
//     .status(200)
//     .json({ id: req.params.id, message: "User deleted successfully." });
// });

module.exports = {
  postLog,
  getLogs
};
