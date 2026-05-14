import React from "react";
import ClickCounterRP from "./RenderProps/ClickCounterRP";
import HoverCounterRP from "./RenderProps/HoverCounterRP";

function RenderPropsCounter() {
  return (
    <div>
      <h2>Counter and Hover using Render Props</h2>
      <ClickCounterRP />
      <HoverCounterRP />
    </div>
  );
}

export default RenderPropsCounter;