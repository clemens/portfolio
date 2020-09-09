import React from "react";

import classes from "./role.module.css";

const Role = ({ label = null }) => {
  return (<li className={classes.roles}>{label}</li>);
};

export default Role;
