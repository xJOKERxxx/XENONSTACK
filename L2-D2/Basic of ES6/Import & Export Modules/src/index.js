import React from "react";
import ReactDom from "react-dom";
/*import pi, { add, sub } from "./math.js";*/
import * as calc from "./calculator.js";

/* We use .render function to create something*/
ReactDom.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.sub(5, 2)}</li>
    <li>{calc.multiply(3, 10)}</li>
    <li>{calc.divide(10, 2)}</li>
  </ul>,
  document.getElementById("root")
); /*.render(what to show,where to show)*/
