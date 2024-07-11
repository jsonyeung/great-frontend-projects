import { RiStarFill } from "react-icons/ri";

function Rating({ value, maxStars }) {
  return (
    <div className="inline-block relative">
      <div className="flex gap-1">
        {new Array(maxStars).fill(null).map(() => (
          <RiStarFill className="size-5 fill-neutral-200" />
        ))}
      </div>

      <div
        className="flex gap-1 absolute inset-0"
        style={{ clipPath: `rect(0px ${(value / maxStars) * 100}% 100% 0)` }}
      >
        {new Array(maxStars).fill(null).map(() => (
          <RiStarFill className="size-5 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
}

export default Rating;
