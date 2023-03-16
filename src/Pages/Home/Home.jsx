import React from 'react';
import Table from "../../Components/Table/Table";
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Users Management Portal</h1>

     <Link to="/adduser" id={styles.addNewUserBtn}>Add New User!</Link>

     <Table />

    </div>
  );
};

export default Home;
