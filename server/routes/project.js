const express = require('express')
const { isUndefined } = require('lodash')
const Issue = require('../model/Issue')
const router = express.Router()
const Project = require('../model/Project')

router.get('/',(req,res)=>{
    return res.status(200).json({
        "status":"OK"
    })
})

//TODO : Add project
router.post('/create',async (req,res)=>{

   const { project_name, description, team, deadline } = req.body
   const error = []
   if(!project_name) error.push({"project_name":"project name can't be null"})
   if(!description) error.push({"description":"description can't be null"})
   if(!deadline) error.push({"deadline":"deadline can't be null"})

  
   if(error.length == 0){
   const project = new Project(req.body)

    await project.save(function(err,result){
        if(err){
            error.push({error: err})
        }
        return res.status(200).json({
            "status":"ok",
            "message":"project created successfully",
            "result":result
        })
       
    })    
}
    if(error.length > 0) return res.status(500).json({
        "status":"fail",
        "message":"something went wrong",
        "error":error
    })
})
//TODO : Get User Projects
router.get('/get',async (req,res)=>{
    const project = await Project.find({createdBy:req.body.id}).exec();
    if(project.length==0){
        return res.status(201).json({
            "status":"fail",
            "message":"No Project yet"
        })
    }
    return res.status(200).json({
        "status":"ok",
        "project":project
    })
})

//TODO : EDIT a Project // ADD TEAM MEMBERS
router.patch('/team/add',async (req,res)=>{
    const error = []
    const { id, team } = req.body
    if(!id) error.push({"id":"Id can't be null"})
    if(!team) error.push({"task_for":"No task is assigned"})
     
    if(error.length == 0){
    const project = await Project.findOne({_id:req.body.id}).exec();
    if(project.length==0){
            return res.status(201).json({
                "status":"fail",
                "message":"No Project yet"
            })
        }else{ 

            const emailExists = project.team.indexOf(team.email) == -1
            if(emailExists){
                project.team.push(team.email);
                project.save();
                return res.status(201).json({
                    "status":"ok",
                    "message":"team member added successfully",
                    "team":project.team
                })
            }else{
                return res.status(201).json({
                    "status":"fail",
                    "message":"email already exists",
                })
            }
           
        }
    }
    return res.status(200).json({
        "status":"fail",
        "error":error
    })

})

//TODO : EDIT a Project // Remove TEAM MEMBERS
router.patch('/team/remove',async (req,res)=>{
    const error = []
    const { id, team } = req.body
    if(!id) error.push({"id":"Id can't be null"})
    if(!team) error.push({"team":"No task is assigned"})
     
    if(error.length == 0){
    const project = await Project.findOne({_id:req.body.id}).exec();
    if(project.length==0){
            return res.status(201).json({
                "status":"fail",
                "message":"No Project yet"
            })
        }else{ 

            const emailNotFound = project.team.indexOf(team.email) == -1
            if(!emailNotFound){
                project.team.pop(team.email);
                project.save();
                return res.status(201).json({
                    "status":"ok",
                    "message":"team member removed successfully",
                    "team":project.team
                })
            }else{
                return res.status(201).json({
                    "status":"fail",
                    "message":"email doesn't exists",
                })
            }
           
        }
    }
    return res.status(200).json({
        "status":"fail",
        "error":error
    })

})
//TODO : DELETE a Project
router.delete('/',async(req,res)=>{
    const project = await Project.find({_id:req.body.id}).exec()
    if(project.length==0){
        return res.status(201).json({
            "status":"fail",
            "message":"No such project"
        })
    }
    await Project.findByIdAndDelete(req.body.id).exec();
 
    return res.status(200).json({
        "status":"ok",
        "message":"project has been deleted successfully"
    })
})
//TODO : GET Members Projects
router.get('/user/',async(req,res)=>{
    const { email } = req.body
    let projects = null
    try{
    await Project.find({'team': { $in: email }
    }, function(err, teamData) {
        projects = (teamData);
    }).clone();
}catch(e){
    console.error(e)
} 
    if(projects.length==0){
        return res.status(201).json({
            "status":"fail",
            "message":"No projects Found"
        })
    }
 
    return res.status(200).json({
        "status":"ok",
        "project": projects
    })
})
//TODO : EDIT a Project // UPDATE PROJECT STATUS
router.patch('/progress/update',async (req,res)=>{
    const error = []
    var { id, progress } = req.body
    if(!id) error.push({"id":"project Id can't be null"})
     
    if(error.length == 0){
    var project = await Project.findOne({_id:req.body.id}).exec();
    if(project.length==0){
            return res.status(201).json({
                "status":"fail",
                "message":"No Project yet"
            })
        }else{ 
                progress = progress.toLowerCase()
                var Progress = ""
                if(progress == "progress") {Progress = "Progress"}
                if(progress == "finished") {Progress = "Finished"}
                if(progress != "progress" && progress != "finished") {Progress = "Start"}
                project.progress = Progress
                project.save()
                return res.status(200).json({
                    "status":"ok",
                    "message":"project status updated successfully",
                    "team":project
                })
        }
    }
    return res.status(200).json({
        "status":"fail",
        "error":error
    })

})



module.exports = router