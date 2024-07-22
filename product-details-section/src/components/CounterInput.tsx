import React, { MouseEvent } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import Tooltip from "./Tooltip";

interface CounterInputProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (newValue: number) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  value,
  min = 0,
  max = 10,
  onChange,
  ...props
}) => {
  const handleOnChange =
    (incValue: number) => (e: MouseEvent<HTMLButtonElement>) => {
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
    <div
      role="group"
      className="inline-flex rounded-md border border-neutral-200 bg-neutral-50"
      {...props}
    >
      <button
        onClick={handleOnChange(-1)}
        disabled={value <= min}
        aria-label="increment"
        className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RiSubtractFill aria-hidden="true" />
      </button>

      <input
        type="number"
        min={min}
        max={max}
        value={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className="w-[3.6rem] appearance-textfield bg-transparent text-center text-sm font-medium"
        readOnly
        tabIndex={-1}
      />

      <Tooltip label="Insufficient stock" hidden={value < max}>
        <button
          onClick={handleOnChange(1)}
          disabled={value >= max}
          aria-label="decrement"
          className="flex size-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RiAddFill className="-mr-1" aria-hidden="true" />
        </button>
      </Tooltip>
    </div>
  );
};

export default CounterInput;
