import { useState } from "react";
import Counter from "./Counter";
const ExponentTwo = ({ count, decrement, increment }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{count * count} </span></p>
  </div>
);

export default ExponentTwo;