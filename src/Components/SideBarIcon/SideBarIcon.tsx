import React from "react";

const SideBarIcon = ({
  icon,
  tooltip,
  onClick,
}: {
  icon: JSX.Element;
  tooltip?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <div onClick={onClick} className="sidebar-icon group">
        {icon}
        {tooltip && (
          <span className="sidebar-tooltip  group-hover:scale-100">
            {tooltip}
          </span>
        )}
      </div>
    </>
  );
};

export default SideBarIcon;
