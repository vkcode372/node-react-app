const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:String,
    phone:String,
    address:String
});

module.exports=mongoose.model('students',studentSchema);