import { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import Tooltip from "./Tooltip";

function CounterInput({ value, min = 0, max = 10, onChange }) {
  const handleOnChange = (incValue: number) => (e) => {
    e.preventDefault();
    let newValue = value + incValue;

    if (newValue < min || newValue > max) {
      return;
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="inline-flex rounded-md border border-neutral-200 bg-neutral-50">
      <button
        onClick={handleOnChange(-1)}
        disabled={value <= min}
        className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RiSubtractFill />
      </button>

      <input
        type="number"
        value={value}
        className="w-[3.6rem] appearance-textfield bg-transparent text-center text-sm font-medium"
        readOnly
      />

      <Tooltip label="Insufficient stock" hidden={value < max}>
        <button
          onClick={handleOnChange(1)}
          disabled={value >= max}
          className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RiAddFill className="-mr-1" />
        </button>
      </Tooltip>
    </div>
  );
}

export default CounterInput;
