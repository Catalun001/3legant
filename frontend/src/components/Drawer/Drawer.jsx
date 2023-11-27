import React, { useRef, useEffect } from "react";

const Drawer = ({ closeDrawer }) => {
  const drawerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      closeDrawer();
    }
  };


  return (
    <div
      className="drawer fixed top-0 right-0 h-full w-64 bg-white shadow z-10"
      ref={drawerRef}
    >
      <div className="p-4">
        <p>This is the drawer content.</p>
        <button onClick={closeDrawer}>Close Drawer</button>
      </div>
    </div>
  );
};

export default Drawer;
