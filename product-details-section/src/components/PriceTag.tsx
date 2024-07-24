import React from "react";

interface PriceTagProps {
  value: string;
  original?: string | null;
}

const PriceTag: React.FC<PriceTagProps> = ({ value, original }) => {
  return (
    <div className="mb-2 text-3xl font-medium">
      <p aria-label={`current price: ${value}`} className="inline-block">
        {value}
      </p>

      {original != null && (
        <p
          aria-label={`original price: ${original}`}
          className="inline-block ml-2 text-lg text-neutral-400 line-through"
        >
          {original}
        </p>
      )}
    </div>
  );
};

export default PriceTag;
