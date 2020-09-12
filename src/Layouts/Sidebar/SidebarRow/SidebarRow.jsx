import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Styles.css";

const SidebarRow = ({ src, Icon, title }) => (
    <div className="sidebar">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
);
export default SidebarRow;
