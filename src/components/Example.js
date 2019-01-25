import React from "react";
import './example.css'
import styles from './example.css'

const Example = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div className={styles.cool}> Example test</div>
    </div>
  );
};

Example.propTypes = {};

export default Example;
