import React from 'react';
import NewUserForm from "../../Components/NewUserForm/NewUserForm"
import styles from "./NewUser.module.css"

const NewUser = () => {
  return (
    <div id={styles.formContainer}>
      <NewUserForm />
    </div>
  );
};

export default NewUser;
