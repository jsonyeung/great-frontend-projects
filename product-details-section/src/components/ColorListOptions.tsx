import React, { HTMLAttributes } from "react";
import { RiCheckLine } from "react-icons/ri";

interface ColorOption {
  value: string;
  label: string;
}

interface ColorListOptionsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  options: ColorOption[];
  value: string | null;
  onSelect?: (value: string) => void;
}

const ColorListOptions: React.FC<ColorListOptionsProps> = ({
  value,
  options,
  onSelect,
}) => {
  function handleColorSelect(option: ColorOption) {
    if (onSelect) onSelect(option.value);
  }

  return (
    <div role="radiogroup" className="flex gap-8 px-2 py-6">
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <div
            className={`group relative size-10 cursor-pointer transition-all ${isSelected ? "p-1" : "p-0"}`}
            onClick={(e) => {
              e.preventDefault();
              handleColorSelect(option);
            }}
          >
            <button
              className={`w-full h-full rounded-full`}
              role="radio"
              aria-labelledby={option.label}
              aria-checked={isSelected}
              style={{ backgroundColor: option.value }}
            ></button>

            <div
              role="presentation"
              className={`absolute inset-0 rounded-full bg-transparent border border-indigo-600  transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-80"}`}
            />

            <RiCheckLine
              aria-hidden="true"
              className={`absolute inset-center size-7 fill-white transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorListOptions;
