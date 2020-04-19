import React from "react";

import classes from "./entry.module.css";

const Entry = ({ desc, timeSpan = null, link = false, title }) => {
  return (
    <div className={classes.wrapper}>
      {link ? (
        <a className={classes.entryTitle} href={link}>
          {title}
        </a>
      ) : (
        <span className={classes.title}>{title}</span>
      )}

      {timeSpan ? (<p className={classes.timeSpan}>{timeSpan}</p>) : ''}

      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default Entry;
