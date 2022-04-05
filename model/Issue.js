const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  project_id: String,
  description: String,
  progress: {
      type: String,
      enum:["Start","In Progress","Done"]
    },
  task_for:  { type : Array , "default" : [] },
  deadline:{type: Date}
});

const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;