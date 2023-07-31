import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Home = () => {
    const [show, setShow] = useState(false);
    const [user,setUser]=useState([]);

    const[name,setUpdateName]=useState("");
    const[email,setUpdateEmail]=useState("");
    const[phone,setUpdatePhone]=useState("");
    const[address,setUpdateAddress]=useState("");
    const[userid,setUserid]=useState("");

    const handleClose=()=>setShow(false);
    const Updateuser = async(id) =>{
      setShow(false);
      let updateres=await fetch(`http://localhost:8080/update/${id}`,{
        method:"PUT",
        body:JSON.stringify({name,email,phone,address}),
        headers:{
          "content-type":"application/json",
      }
      });
      let result=updateres.json();
      getUser();
  
    } 
    const handleShow = async (id) => {
       setShow(true);
       let GetData=await fetch(`http://localhost:8080/getuser/${id}`);
        let result =await GetData.json(GetData);
        setUserid(result._id);
        setUpdateEmail(result.email);
        setUpdateName(result.name);
      
        setUpdatePhone(result.phone);
        setUpdateAddress(result.address);
    }
    
    useEffect(()=>{
        getUser();
    },[])
    const getUser= async ()=>{
        try{
            const data= await fetch('http://localhost:8080/user');
            let result=await data.json();
             setUser(result);
            // console.log(result);
        }catch(error){
           alert(error);
        }          
};
async function  deleteStudent(id){
      let result= await fetch(`http://localhost:8080/delete/${id}`,{
       method:"DELETE",
      });
       result= await result.json();
      if(result.acknowledged==true){

        getUser();
      }else{
        console.log("data not delete");
      }
}
    
  return (
  
    <div className='container'>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Udpade Records</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
       
       <Col sm="12">
         <Form.Control  placeholder='Add Name' value={name} onChange={(e)=>setUpdateName(e.target.value)}/>
       </Col>
     
      
     </Form.Group>
     <Form.Group as={Row} className="mb-3"  controlId="formPlaintextName" >
    
       <Col sm="12">
         <Form.Control  placeholder='Enter Email' value={email} onChange={(e)=>setUpdateEmail(e.target.value)}/>
       </Col>
    
     </Form.Group>
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextName" >
   
       <Col sm="12">
         <Form.Control  placeholder='Enter Phone No'  value={phone} onChange={(e)=>setUpdatePhone(e.target.value)}  />
       </Col>
     
     </Form.Group>
     <Form.Group as={Row} className="mb-3"  controlId="formPlaintextName" >
    
       <Col sm="12">
         <Form.Control  placeholder='Enter Address'  value={address}  onChange={(e)=>setUpdateAddress(e.target.value)}/>
       </Col>
      
     </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={()=>Updateuser(userid)} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <h1>Student List</h1>
        <table className="table  border shadow table-hover">
  <thead className='table-dark'>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((userinfo,index)=>{
            return(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{userinfo.name}</td>
                <td>{userinfo.email}</td>
                <td>{userinfo.phone}</td>
                <td>{userinfo.address}</td>
                <td>
                  <Link className='btn btn-primary m-2' to={"/view/"+userinfo._id}>View</Link>
                  <button className='btn btn-outline-primary m-2' onClick={()=>handleShow(userinfo._id)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>deleteStudent(userinfo._id)} >Delete</button>
                </td>
              </tr>
            )
        })
    }
    
  </tbody>
</table>
    </div>
  )
}
