import React from 'react';
import EditUserForm from '../../Components/EditUserForm/EditUserForm';
import styles from "./EditUser.module.css"

const EditUser = () => {
  return (
    <div id={styles.formContainer}>
      <EditUserForm />
    </div>
  );
};

export default EditUser;
 