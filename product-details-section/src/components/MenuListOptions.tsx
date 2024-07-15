import { useState } from "react";

function MenuListOptions() {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: "XS", value: "XS" },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
  ];

  function handleMenuSelect(option) {
    setSelected(option);
  }

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {options.map((option) => {
        const isSelected = selected != null && option.label === selected.label;

        return (
          <button
            className={`h-12 w-16 rounded-sm border ${isSelected ? "border-indigo-600" : "border-neutral-200"} bg-transparent font-medium text-black`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuSelect(option);
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default MenuListOptions;
