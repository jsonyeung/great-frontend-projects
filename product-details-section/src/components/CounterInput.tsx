import { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import Tooltip from "./Tooltip";

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
    <div className="inline-flex rounded-md border border-neutral-200 bg-neutral-50">
      <button
        onClick={handleDecrement}
        disabled={count <= min}
        className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RiSubtractFill />
      </button>

      <input
        type="number"
        value={count}
        className="w-[3.6rem] appearance-textfield bg-transparent text-center text-sm font-medium"
        readOnly
      />
      <Tooltip label="Insufficient stock" disabled={count < max}>
        <button
          onClick={handleIncrement}
          disabled={count >= max}
          className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RiAddFill className="-mr-1" />
        </button>
      </Tooltip>
    </div>
  );
}

export default CounterInput;
