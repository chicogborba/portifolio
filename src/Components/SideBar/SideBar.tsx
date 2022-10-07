import React, { memo, ReactNode } from "react";
import { Home, AddReaction } from "@mui/icons-material/";
import SideBarStyles from "./SideBarStyles";
import SideBarIcon from "../SideBarIcon/SideBarIcon";

const SideBar = () => {
  const styles = SideBarStyles;

  return (
    <div className={styles.side_bar}>
      <SideBarIcon tooltip="Home" icon={<Home />} />
      <SideBarIcon tooltip="Home" icon={<AddReaction />} />
      <SideBarIcon tooltip="Home" icon={<AddReaction />} />
    </div>
  );
};

export default memo(SideBar);
