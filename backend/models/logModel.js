// Requiring mongoose.
const mongoose = require("mongoose");

// Creating the Admin Schema model for our database in mongoose as by default we don't have to provide any Schema.
const logSchema = new mongoose.Schema(
  {
    machine: {
      // Type checking.
      type: String,
      // Required : true meanins it has to be provided and if not provided will show an error message.
      required: [true, "Please add a machine name"],
    },
    monitor: {
      // Type checking.
      type: String,
      // Required : true meanins it has to be provided and if not provided will show an error message.
      required: [true, "Please add an monitor name"],
      // If we use unique: true then no other document can have the same value of this key in the collection.
    },
    data_id: {
      // Type checking.
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Please add an monitor name"],
      // Required : true meanins it has to be provided and if not provided will show an error message.
      // If we use unique: true then no other document can have the same value of this key in the collection.
    },
    features: {
      // Type checking.
      type: Array,
      required: [true, "Please add an features"],
    },
    timestamp: {
      // Type checking.
      type: String,
      required: [true, "Please add a timestamp"],
    },
  },
  {
    // This will automatically create the timestamps of data created.
    timestamps: true,
  }
);

// Exporting the model created.
module.exports = mongoose.model("Log", logSchema);
