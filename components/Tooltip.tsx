import React, { useState } from "react";
type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

function Tooltip(props: TooltipProps) {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const hideTooltip = () => {
    setDisplayTooltip(false);
  };

  const showTooltip = () => {
    setDisplayTooltip(true);
  };

  /* absolute -top-5 whitespace-nowrap rounded-sm bg-gray-700 px-2 text-xs font-bold */
  return (
    <div className="relative">
      <span className="" onMouseLeave={hideTooltip} onMouseEnter={showTooltip}>
        {props.children}
      </span>
      {displayTooltip && (
        <div className="absolute -top-5 whitespace-nowrap bg-gray-700 px-2 text-xs font-bold">
          {props.text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
