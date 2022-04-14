const jwt = require('jsonwebtoken');

//User Auth
const AuthUser = async(req,res,next)=>{
    const token = req.cookies.jwt_token
    if(!token){
        return res.status(403).json({
            "status":"fail",
            "message":"Not Authorized, Token not available"
        })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          return res.status(403).json({ message: "Not authorized" })
        }
        next()
      })
    
}

const AdminUser = async(req,res,next)=>{
    const token = req.cookies.jwt_token
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if(decodedToken.isAdmin){
            next()
        }
        return res.status(403).json({
            "status":"fail",
            "message":"Not Authorized for Admin panel"
        })
       
      })
    
}
module.exports = { AuthUser, AdminUser}