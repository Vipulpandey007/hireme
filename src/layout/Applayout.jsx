import React from "react";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      layout
      <Outlet />
    </div>
  );
};

export default Applayout;
