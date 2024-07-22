import React, { cloneElement, useState, useId, ReactElement } from "react";

interface TooltipProps {
  children: ReactElement;
  label: string;
  hidden?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  hidden = false,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const tooltipId = useId();

  const showTooltip = (): void => {
    setActive(true);
  };

  const hideTooltip = (): void => {
    setActive(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {cloneElement(children, {
        "aria-describedby": !hidden ? tooltipId : undefined,
      })}

      {!hidden && active && (
        <div
          role="tooltip"
          id={tooltipId}
          className="absolute flex bottom-full left-1/2 -translate-x-1/2 w-max pointer-events-none mb-1 px-2 py-1.5 bg-neutral-700 rounded-md text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
