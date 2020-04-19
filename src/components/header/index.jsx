import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Clemens Kofler"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Clemens Kofler</h1>
        <h2>Experienced technologist and entrepreneur based in Munich, Germany.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
