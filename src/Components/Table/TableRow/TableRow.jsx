import React from 'react';
import styles from "./TableRow.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableRow = ({srNo,fullName,email,mobileNumber,isActive,id}) => {
 
    const deleteRow =  () => {
      // alert("delete button called" + id);

//call delete api and pass this "id"
      axios
      .delete(`http://localhost:1996/users/${id}`)
   .then( () => {
    // alert("user deleted sucessfully");
    window.location.reload();
   });
  };
   

   

  return (
   
       <tr className={styles.row}>
            <td>{srNo}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{mobileNumber}</td>
            <td>{isActive}</td>
            <td>
               <Link to={`/edituser/${id}`} id={styles.editBtn}>Edit</Link>          
            </td>
           <td>
            <button id={styles.deleteBtn} onClick = {deleteRow}>Delete</button>
           </td>
        </tr>

        
   
  );
};

export default TableRow;
