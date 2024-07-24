import React, { MouseEvent, HTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}

interface MenuListOptionsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  options: Option[];
  value: string | null;
  onSelect?: (value: string) => void;
}

const MenuListOptions: React.FC<MenuListOptionsProps> = ({
  options,
  value,
  onSelect,
  ...props
}: MenuListOptionsProps) => {
  function handleMenuSelect(option: Option) {
    if (onSelect) {
      onSelect(option.value);
    }
  }

  return (
    <div role="radiogroup" className="flex flex-wrap gap-4 py-4" {...props}>
      {options.map((option) => {
        const isSelected = value != null && option.value === value;

        return (
          <button
            key={option.value}
            className={`h-12 w-16 rounded-md border bg-transparent font-medium text-black transition-colors ${
              isSelected
                ? "border-indigo-600"
                : "border-neutral-200 hover:border-indigo-300"
            }`}
            role="radio"
            aria-labelledby={option.label}
            aria-checked={isSelected}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
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
};

export default MenuListOptions;
