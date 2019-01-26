import React from "react";
// import './example.css'
import styles from './example.css'
// import './example.less'
import './example.scss'
import axios from 'axios'

const Example = () => {
  return <div>
      <h1>Hello</h1>
      {/*  <div className={styles.cool}> Example test</div> */}
      <div> Example test</div>
      <button
        onClick={() =>
          axios.get("https://jsonplaceholder.typicode.com/users")
        }
      >
        Ajax1
      </button>
      <button onClick={() => axios.get("/api/users")}>
        Ajax2
      </button>
    </div>;
};

Example.propTypes = {};

export default Example;
