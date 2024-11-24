const mongoose = require('mongoose');



const TechnologiesModel = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    category : { 
        type : String 
        //required : true
    },
    description : { 
        type : String 
        //required : true
    },
    Article:{
        type : String 
        //required :true
    },
    resourses :{
        type :[String] 
        //required : true
    },
    steps:{
        type :[String] 
        //required : true
    },






},{
  timestamps: true  // Automatically add createdAt and updatedAt fields
})



const Tech = mongoose.model('tech', TechnologiesModel);
module.exports = Tech;
