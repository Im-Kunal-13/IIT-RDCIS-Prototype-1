// importing Express async handler.
const asyncHandler = require("express-async-handler");
// importing the Data Schema Model for our database.
const Data = require("../models/dataModel");

// @Desciption -> Get All data
// @Route -> GET /api/analytics/
// @Access -> Private
const getData = asyncHandler(async (req, res) => {
  // Destructuring the req.query.
  const { plant, machine, monitor } = req.body;

  if (!plant || !machine || !monitor) {
    throw new Error("Please enter all the fields.");
  }
  // Getting all data of the model type 'Data' here.
  const data = await Data.find({plant, machine, monitor});

  res.status(200).json(data);
});

module.exports = {
  getData,
};
