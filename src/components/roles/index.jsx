import React from "react";

import classes from "./roles.module.css";

const Roles = ({ children }) => {
  return (<ul className={classes.roles}>{children}</ul>);
};

export default Roles;
