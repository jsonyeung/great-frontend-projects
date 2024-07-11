import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

function ColorListOptions({}) {
  const [selected, setSelected] = useState({ label: "blue", value: "blue" });

  const options = [
    { label: "blue", value: "blue" },
    { label: "brown", value: "brown" },
  ];

  function handleColorSelect(option) {
    setSelected(option);
  }

  return (
    <div className="flex gap-8 px-2 py-6">
      {options.map((option) => {
        const isSelected = option.label === selected.label;

        return (
          <div
            className={`relative size-10 cursor-pointer ${isSelected ? "p-1" : "p-0"}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                handleColorSelect(option);
              }}
              className={`w-full h-full rounded-full`}
              aria-labelledby={option.label}
              style={{ backgroundColor: option.value }}
            ></button>

            {isSelected && (
              <>
                <div className="absolute inset-0 rounded-full bg-transparent border border-indigo-600" />
                <RiCheckLine className="absolute inset-center size-7 fill-white" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ColorListOptions;
