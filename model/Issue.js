const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  project_id: String,
  description: String,
  progress: {
      type: String,
      enum:["Start","Progress","Finished"],
      default: "Start"
    },
  task_for:  { type : Array , "default" : [] },
  deadline:{type: Date}
},{timestamps:true});

const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;