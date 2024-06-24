const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:5,
    maxLength:30
  },
  password:{
    type:String,
    required:true,
    minLength:8,
    maxLength:50
  },
  firstName:{
    type:String,
    required:true,
    trim:true,
    maxLength:50,
  },
  lastName:{
    type:String,
    required: true,
    maxLength:50,
    trim:true,
  }
});

const User = mongoose.model("User", userSchema);


const accountSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:'true'
  },
  balance:{
    type: Number,
    required: true
  }
});
const Account = mongoose.model('Account',accountSchema);

module.exports = {
  User,
  Account
};