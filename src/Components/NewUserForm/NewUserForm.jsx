import React from 'react';
import styles from "./NewUserForm.module.css";
import{Link,useNavigate} from "react-router-dom";
import {AiFillBackward} from "react-icons/ai"
import { useState } from 'react';
import axios from 'axios';

const NewUserForm = () => {

  const navigate = useNavigate();

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

    axios.post("http://localhost:1996/users",userData).then((res) => {
      navigate("/");
    }).catch(err => alert(err));
    

  };

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [mobileNumber,setmobileNumber] = useState("");
  const [isActive,setIsActive] = useState("");


  return (
    <form id={styles.newUserForm} onSubmit={handleSubmit}>
      <h2>Create New User!</h2>

      <input type="text" placeholder='Enter Full Name' required  onChange={(e) => setFullName(e.target.value)}/>

      <input type="email" placeholder='Enter USer Email' required 
      onChange={(e) => setEmail(e.target.value)} />

      <input type="number" placeholder='Enter Mobile Number' required 
      onChange={(e) => setmobileNumber(e.target.value)}/>

    <div>
      <label htmlFor="active">
        <input type="radio" name='isActive' id='active' required 
      onClick={() => setIsActive(true)}/>Active
      </label>

      <label htmlFor="inActive">
      <input type="radio" name='isActive' id='inActive' required 
        onClick={() => setIsActive(false)}/>inActive
      </label>
   </div> 
    
      

      <input type="submit" value="Add User!"/>

      <Link to='/' style={{color:"white"}}><AiFillBackward /> Back</Link>

    </form>
  );
};

export default NewUserForm;
