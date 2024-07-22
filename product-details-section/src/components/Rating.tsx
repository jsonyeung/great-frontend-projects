import React from "react";
import { RiStarFill } from "react-icons/ri";

interface RatingProps {
  value: number;
  maxStars: number;
}

const Rating: React.FC<RatingProps> = ({ value, maxStars }) => {
  return (
    <div
      className="inline-block relative"
      role="img"
      aria-label={`rating: ${value} out of ${maxStars} stars`}
    >
      <div className="flex gap-1">
        {new Array(maxStars).fill(null).map((_, index) => (
          <RiStarFill
            key={`empty-${index}`}
            className="size-5 fill-neutral-200"
          />
        ))}
      </div>

      <div
        className="flex gap-1 absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - (value / maxStars) * 100}% 0 0)` }}
      >
        {new Array(maxStars).fill(null).map((_, index) => (
          <RiStarFill
            key={`filled-${index}`}
            className="size-5 fill-yellow-400"
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
