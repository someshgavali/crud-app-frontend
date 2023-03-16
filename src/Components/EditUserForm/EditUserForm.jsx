import React from 'react';
import styles from "./EditUserForm.module.css";
import{Link,useNavigate, useParams} from "react-router-dom";
import {AiFillBackward} from "react-icons/ai"
import { useState,useEffect } from 'react';
import axios from 'axios';

const EditUserForm = () => {

  const navigate = useNavigate();
  const {userId} = useParams();
  // console.log(userId);

  
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [mobileNumber,setmobileNumber] = useState("");
  const [isActive,setIsActive] = useState("");

  const [userData,setUserData] = useState({});


  useEffect( () =>{
    // call the api to get the single user data to edit
    axios.get(`http://localhost:1996/users/${userId}`).then((res) => {console.log(res.data[0])
    setUserData(res.data[0]);

    setFullName(res.data[0].name);
    setEmail(res.data[0].email);
    setmobileNumber(res.data[0].mobileNumber);
    setIsActive(res.data[0].isActive);

  });
  },[])


  const handleSubmit = (e) =>{
    e.preventDefault();
    // alert("form submitted");
    // console.log(fullName,email,mobileNumber,isActive);

    const userData = {
      name: fullName,
      email: email,
      mobileNumber: mobileNumber,
      isActive: isActive,
    };
    // console.log(userData)

    // this this userData to Backend

    axios.put(`http://localhost:1996/users/${userId}`, userData)
    .then((res) => {
      navigate("/");
    }).catch(err => alert(err));
    

  };


  return (
    <form id={styles.editUserForm} onSubmit={handleSubmit}>
      <h2>Edit Existing User!</h2>

      <input type="text" placeholder='Enter Full Name' required  onChange={(e) => setFullName(e.target.value)}
      defaultValue={userData.name}
      />

      <input type="email" placeholder='Enter USer Email' required 
      onChange={(e) => setEmail(e.target.value)} 
      defaultValue={userData.email}
      />

      <input type="number" placeholder='Enter Mobile Number' required 
      onChange={(e) => setmobileNumber(e.target.value)}
      defaultValue={userData.mobileNumber}
      />

    <div>
      <label htmlFor="active">
        <input type="radio" name='isActive' id='active' required 
        defaultChecked={userData.isActive}
      onClick={() => setIsActive(true)}/>Active
      </label>

      <label htmlFor="inActive">
      <input type="radio" name='isActive' id='inActive' required 
       defaultChecked={userData.isActive ? false : true}
        onClick={() => setIsActive(false)}/>inActive
      </label>
   </div> 
    
      
   <input type="submit" value="Update User Details!"/> 
      

      <Link to='/' style={{color:"white"}}><AiFillBackward /> Back</Link>

    </form>
  );
};

export default EditUserForm;
