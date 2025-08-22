import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center mb-4">
        <p className="mb-2 text-2xl font-semibold  rounded-md">Count {count}</p>
        <h6 className="text-gray-400">
          Count is {count % 2 === 0 ? "Even" : "Odd"}
        </h6>
      </div>
      <div className="w-64">
        <div className="flex justify-center gap-2.5">
          <button
            onClick={() => setCount(count + 1)}
            className="border bg-[#242424] cursor-pointer text-[#fff] px-3 py-2 rounded-lg flex-1"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="border bg-[#242424] cursor-pointer text-[#fff] px-3 py-2 rounded-lg flex-1"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className=" w-full border bg-[#242424] cursor-pointer text-[#fff] px-3 py-2 rounded-lg mt-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
