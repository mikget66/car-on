import React from "react";

const Sidebar = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <div className={`${isOpen ? "overlay" : ""} hidden`}>
      <aside></aside>
    </div>
  );
};

export default Sidebar;
