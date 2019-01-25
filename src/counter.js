import React from "react";
import ReactDom from "react-dom";
// 访问counter.html
const Counter = () => {
  return <div>Counter</div>;
};

ReactDom.render(<Counter />, document.getElementById('root1'));
