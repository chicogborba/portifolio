import React, { memo, ReactNode } from "react";
import { Mail, WhatsApp } from "@mui/icons-material/";
import SideBarStyles from "./SideBarStyles";
import SideBarIcon from "../SideBarIcon/SideBarIcon";
// @ts-ignore
import { ReactComponent as GitIcon } from "../../Components/Content/Techs/icons/github-icon.svg";
// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../../Components/Content/Techs/icons/linkedin-icon.svg";

const SideBar = () => {
  const styles = SideBarStyles;

  return (
    <div className={styles.side_bar}>
      <SideBarIcon
        onClick={() => window.open("https://github.com/chicogborba", "_blank")}
        tooltip="GitHub"
        icon={<GitIcon className="w-6 h-6" />}
      />
      <SideBarIcon
        tooltip="LinkedIn"
        onClick={() => window.open("https://github.com/chicogborba", "_blank")}
        icon={<LinkedInIcon className="w-6 h-6" />}
      />
      <SideBarIcon
        onClick={() =>
          window.open("mailto:f.grudzinski@edu.pucrs.br", "_blank")
        }
        tooltip="E-mail"
        icon={<Mail className="w-6 h-6" />}
      />
      <SideBarIcon
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=5551985251091",
            "_blank"
          )
        }
        tooltip="WhatsApp"
        icon={<WhatsApp className="w-6 h-6" />}
      />
    </div>
  );
};

export default memo(SideBar);
