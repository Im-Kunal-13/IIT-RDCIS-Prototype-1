// Requiring mongoose.
const mongoose = require("mongoose");
//plugin to support Double in mongoose
require('mongoose-double')(mongoose)

// Schema types through mongoosee. 
var SchemaTypes = mongoose.Schema.Types;

// Creating the Data Schema model for our database in mongoose as by default we don't have to provide any Schema.
const dataSchema = new mongoose.Schema({
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
    required: [true, "Please add a monitor name"],
  },
  date: {
    // Type checking.
    type: String,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add a date"],
  },
  time: {
    // Type checking.
    type: String,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add a time"],
  },
  total_acceleration_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add total average acceleration"],
  },
  axial_velocity_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average axial velocity"],
  },
  vertical_velocity_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average vertical velocity"],
  },
  horizontal_velocity_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average horizontal velocity"],
  },
  temperature_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average temperature"],
  },
  audio_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average audio"],
  },
  angular_misalignment_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average angular misalignment"],
  },
  bearing_fault_bpfi_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average bearing fault bpfi"],
  },
  bearing_fault_bpfo_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average bearing fault bpfo"],
  },
  bearing_fault_bsf_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average bearing fault bsf"],
  },
  bearing_fault_ftf_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average bearing fault ftf"],
  },
  looseness_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average looseness"],
  },
  parallel_misalignment_avg: {
    // Type checking.
    type: Number,
    // Required : true meanins it has to be provided and if not provided will show an error message.
    required: [true, "Please add average parallel misalignment"],
  },
});

// Exporting the model created.
module.exports = mongoose.model("Data", dataSchema, "analytics");
