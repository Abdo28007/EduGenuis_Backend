const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  
    unique: true,    
    trim: true      
  },
  name: {
    type: String,
    required: true  
  },
  password: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true,  
    unique: true
  },
   birth_date :{
    type : Date,
    required : true
  },
  gender :{
    type : String
  },
  phone_number:{
    type : Number
  },
  image :{
    type : String,
    default : ""
  },
  is_admin :{
    type : Boolean,
    default : false
  }
}, 
{
  timestamps: true  // Automatically add createdAt and updatedAt fields
});

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

const User = mongoose.model('UserInfo', userSchema);
module.exports = User;
