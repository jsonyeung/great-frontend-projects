import { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

function CounterInput() {
  const [count, setCount] = useState(0);

  const min = 0;
  const max = 10;

  function handleIncrement(e) {
    e.preventDefault();
    setCount(Math.min(Math.max(min, count + 1), max));
  }

  function handleDecrement(e) {
    e.preventDefault();
    setCount(Math.min(Math.max(min, count - 1), max));
  }

  return (
    <div className="inline-flex overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
      <button
        onClick={handleDecrement}
        disabled={count <= min}
        className="flex size-8 items-center justify-center"
      >
        <RiSubtractFill />
      </button>

      <input
        type="number"
        value={count}
        className="w-[3.6rem] appearance-textfield bg-transparent text-center text-sm font-medium"
        readOnly
      />

      <button
        onClick={handleIncrement}
        disabled={count >= max}
        className="flex size-8 items-center justify-center"
      >
        <RiAddFill className="-mr-1" />
      </button>
    </div>
  );
}

export default CounterInput;
