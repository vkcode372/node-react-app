const express=require('express');
const app=express();
require("./db/config");
const cors = require('cors');
const Student=require("./db/student");
app.use(cors());
app.use(express.json());


app.get("/user",async (res,resp)=>{
    let result=await Student.find();
    resp.send(result);
});


app.post("/adduser",async(res,resp)=>{
     let students =new Student(res.body);
     let result= await students.save();
     resp.send(result);
});

app.delete("/delete/:id",async(res,resp)=>{
    try{
        let result= await Student.deleteOne({_id:res.params.id});
        resp.send(result);
    }catch(error){
        resp.send({result:"Something is worng"});
    }
       
});
app.get("/getuser/:id", async (res,resp)=>{
    try{
          let result =await Student.findOne({_id:res.params.id});
           resp.send(result);
    }catch{
           resp.send({result:"Something is wrong"});
    }
})

app.put("/update/:id", async (res,resp)=>{
    // console.log(res.body);
    try{
          let result =await Student.updateOne(
            {_id:res.params.id},
            {
                $set:res.body,
            }
          );
           resp.send(result);
    }catch(error){
           resp.send({result:"something is wrong:"+error});
    }
})
app.listen(8080);