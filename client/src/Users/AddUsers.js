import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddUsers = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const navigate=useNavigate();
    const sendData=async()=>{
          let data= await fetch('http://localhost:8080/adduser',{
            method:"post",
            body:JSON.stringify({name,email,phone,address}),
            headers:{
                "Content-Type":"application/json"
            }
          }) ;
          let result=await data.json();
        if(result){
            setTimeout(() => {
                navigate("/");
            }, 2000);
          
        }else{
            alert("Some thing is wrong");
        }
              
    }


  return ( 
    <>
    
    <h1>Add user</h1>
     <div className='container'>
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
       
       <Col sm="12">
         <Form.Control  placeholder='Add Name' value={name} onChange={(e)=>setName(e.target.value)}/>
       </Col>
     
      
     </Form.Group>
     <Form.Group as={Row} className="mb-3"  controlId="formPlaintextName" >
    
       <Col sm="12">
         <Form.Control  placeholder='Enter Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
       </Col>
    
     </Form.Group>
     <Form.Group as={Row} className="mb-3"  controlId="formPlaintextName" >
   
       <Col sm="12">
         <Form.Control  placeholder='Enter Phone No' value={phone} onChange={(e)=>setPhone(e.target.value)}  />
       </Col>
     
     </Form.Group>
     <Form.Group as={Row} className="mb-3"  controlId="formPlaintextName" >
    
       <Col sm="12">
         <Form.Control  placeholder='Enter Address' value={address}  onChange={(e)=>setAddress(e.target.value)}/>
       </Col>
      
     </Form.Group>
     <Button variant="primary" onClick={sendData}>Add Product</Button>

</div>
    </>
  )
}
