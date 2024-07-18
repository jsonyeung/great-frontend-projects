function MenuListOptions({ options, value, onSelect }) {
  function handleMenuSelect(option) {
    if (onSelect) {
      onSelect(option.value);
    }
  }

  return (
    <div role="radiogroup" className="flex flex-wrap gap-4 py-4">
      {options.map((option) => {
        const isSelected = value != null && option.value === value;

        return (
          <button
            key={option.value}
            className={`h-12 w-16 rounded-sm border ${
              isSelected ? "border-indigo-600" : "border-neutral-200"
            } bg-transparent font-medium text-black`}
            role="radio"
            aria-labelledby={option.label}
            aria-checked={isSelected}
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
