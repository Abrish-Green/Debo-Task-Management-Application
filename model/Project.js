const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  project_name: String,
  description: String,
  progress: {
      type: String,
      enum:["Start","Progress","Finished"],
      default:"Start"
    },
  team: { type : Array , "default" : [] }
  ,
  deadline:{type: Date},
  createdBy: String,
},{timestamps:true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;