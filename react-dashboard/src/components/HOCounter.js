import React from "react";
import withCounter from "./HOC/withCounter";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";

const ClickCounterHOC = withCounter(ClickCounter, 1);
const HoverCounterHOC = withCounter(HoverCounter, 1);

function HOCounter() {
  return (
    <div>
      <h2>Counter and Hover using HOC</h2>
      <ClickCounterHOC />
      <HoverCounterHOC />
    </div>
  );
}

export default HOCounter;