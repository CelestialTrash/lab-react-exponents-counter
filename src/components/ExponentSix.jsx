import { useState } from "react";
const ExponentSix = ({ count, decrement, increment }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{count * count * count * count * count * count}</span></p>
  </div>
);

export default ExponentSix;