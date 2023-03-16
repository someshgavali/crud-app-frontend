import React from 'react';
import styles from "./Table.module.css";
import TableRow from './TableRow/TableRow';
import { useEffect,useState } from "react";
import axios from 'axios';

const Table = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {

    // fetch("http://localhost:1996/users")
    // .then((res) => res.json())
    // .then((data) => console.log(data));

    axios
    .get("http://localhost:1996/users")
       .then((data) =>setUsers(data.data));
  },[]);

console.log(users);




  return (
    <table border={1} id={styles.infoTable}> 

    <thead>

        <tr>
            <th>Sr.No.</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Active Status</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>

    <tbody>
      {
        users.map( (record,index) => 

          <TableRow 
          key={record._id}
          srNo={index + 1} 
          fullName={record.name}
          email={record.email}
          mobileNumber={record.mobileNumber}
          isActive={record.isActive ? "Active" : "InActive"}
          id={record._id}
          />
        )}


    </tbody>

       

    </table>
      
    
  )
}

export default Table
