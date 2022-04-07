const express = require('express')
const router = express.Router()
const Project = require('../model/Project')
const Issue = require('../model/Issue')

router.get('/',(req,res)=>{
    return res.status(200).json({
        "status":"OK"
    })
})

//TODO : Add Issue
router.post('/create',async (req,res)=>{

   const { project_id, description, task_for, deadline } = req.body
   const error = []
   if(!project_id) error.push({"project_id":"project id  can't be null"})
   if(!description) error.push({"description":"description can't be null"})
   if(!deadline) error.push({"deadline":"deadline can't be null"})

  
   if(error.length == 0){
   const issue = new Issue({
        project_id: project_id,
        description : description,
        deadline : deadline,
        task_for: task_for
   })

    await issue.save(function(err,result){
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

//TODO : Get Issue
router.get('/get',async (req,res)=>{
    const { id } = req.body
    if(!id) return res.status(201).json({
        "status":"fail",
        "message":"ID can't be null"
    })
    const issue = await Issue.findById(id).exec();
    if(!issue){
        return res.status(201).json({
            "status":"fail",
            "message":"No such issue"
        })
    }
    return res.status(200).json({
        "status":"ok",
        "project":issue
    })
})

//TODO : EDIT a Issue // Assign Task to Member
router.patch('/assign',async (req,res)=>{
    const error = []
    const { id, task_for } = req.body
    if(!id) error.push({"id":"Id can't be null"})
    if(!task_for) error.push({"task_for":"No task is assigned"})
     
    if(error.length == 0){
    const issue = await Issue.findOne({_id:req.body.id}).exec();
    if(issue.length==0){
            return res.status(201).json({
                "status":"fail",
                "message":"No Issue"
            })
        }else{ 

            const emailExists = issue.task_for.indexOf(task_for.email) !== -1
            if(!emailExists){
                issue.task_for.push(task_for.email);
                issue.save();
                return res.status(201).json({
                    "status":"ok",
                    "message":"team member added successfully",
                    "team":issue.task_for
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

//TODO : DELETE a Issue
router.delete('/',async(req,res)=>{
    const issue = await Issue.find({_id:req.body.id}).exec()
    if(issue.length==0){
        return res.status(201).json({
            "status":"fail",
            "message":"No such Issue"
        })
    }
    await Issue.findByIdAndDelete(req.body.id).exec();
 
    return res.status(200).json({
        "status":"ok",
        "message":"Issue has been deleted successfully"
    })
})

//TODO : GET Users Issue
router.get('/user/',async(req,res)=>{
    const { email } = req.body
    let issues = null
    try{
    await Issue.find({'task_for': { $in: email }
    }, function(err, teamData) {
        issues = (teamData);
    }).clone();
}catch(e){
    console.error(e)
} 
    if(issues.length==0){
        return res.status(201).json({
            "status":"fail",
            "message":"No Issue Found"
        })
    }
 
    return res.status(200).json({
        "status":"ok",
        "issues": issues
    })
})


module.exports = router