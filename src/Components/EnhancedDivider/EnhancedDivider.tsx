import { Divider } from "@mui/material";
import React from "react";

const EnhancedDivider = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center text-purple-400 items-center">
        <div className="w-72 h-[2px] mr-4 bg-purple-400 rounded-sm" />
        //
        <div className="w-72 h-[2px] ml-4 bg-purple-400 rounded-sm" />
      </div>
    </>
  );
};

export default EnhancedDivider;
