const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;

const UserSchema = new mongoose.Schema({
  username: {
    type: String, lowercase: true, unique: true, required: true, index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: {type:String},
  salt: {type:String},
  isAdmin:{type: Boolean}
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword =  function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    
  };

UserSchema.methods.validPassword = function(password) {
     var password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
     return this.password === password;
  };

UserSchema.methods.generateJWT = function(_id, email) {
      var today = new Date();
      var exp = new Date(today);
      exp.setDate(today.getDate() + 60);
      return jwt.sign({
        id: id,
        email: email,
        exp: parseInt(exp.getTime() / 1000),
      }, secret)
    };


UserSchema.methods.toAuthJSON = function(){
        return {
          username: this.username,
          email: this.email,
          token: this.generateJWT(),
        };
      };
const User = mongoose.model("User", UserSchema);

module.exports = User;