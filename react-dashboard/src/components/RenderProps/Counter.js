import { useState } from "react"; // ✅ Only need useState

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return children(count, increment);
}

export default Counter;