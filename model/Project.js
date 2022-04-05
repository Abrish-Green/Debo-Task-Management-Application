const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  project_name: String,
  description: String,
  progress: {
      type: String,
      enum:["Start","In Progress","Finished"]
    },
  team: {
    type: String,
  },
  deadline:{type: Date}
});

const Project = mongoose.model("Project", UserSchema);

module.exports = Project;