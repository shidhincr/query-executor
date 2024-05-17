import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-sky-700">
        Hello world!
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
