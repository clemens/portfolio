import React from "react";

import classes from "./entry.module.css";

const Entry = ({ desc, link = false, title }) => {
  return (
    <div className={classes.wrapper}>
      {link ? (
        <a className={classes.entryTitle} href={link}>
          {title}
        </a>
      ) : (
        <span className={classes.title}>{title}</span>
      )}

      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default Entry;
