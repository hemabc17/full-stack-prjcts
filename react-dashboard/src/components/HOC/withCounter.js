import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementValue = 1) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + incrementValue);
    };

    return <WrappedComponent count={count} increment={increment} {...props} />;
  };
};

export default withCounter;