import React from "react";

interface PriceTagProps {
  value: string;
  original?: string | null;
}

const PriceTag: React.FC<PriceTagProps> = ({ value, original }) => {
  return (
    <div className="mb-2 text-3xl font-medium">
      <span aria-label={`current price: ${value}`}>{value}</span>

      {original != null && (
        <span
          aria-label={`original price: ${original}`}
          className="ml-2 text-lg text-neutral-400 line-through"
        >
          {original}
        </span>
      )}
    </div>
  );
};

export default PriceTag;
