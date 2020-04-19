import React from "react";

import classes from "./entry.module.css";

const Entry = ({ desc = null, role = null, timeSpan = null, link = false, title, children }) => {
  return (
    <div className={classes.wrapper}>
      {role ? (<h3 className={classes.entryRole}>{role}</h3>) : ''}
      {link ? (
        <a className={classes.entryTitle} href={link}>
          {title}
        </a>
      ) : (
        <span className={classes.title}>{title}</span>
      )}

      {timeSpan ? (<p className={classes.timeSpan}>{timeSpan}</p>) : ''}

      {desc ? (<p className={classes.desc}>{desc}</p>) : ''}
      {children ? (<div>{children}</div>)  :''}
    </div>
  );
};

export default Entry;
