import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

function Button({ children, type = "primary", color = "blue" }) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.red]: color === "red",
        [styles.black]: color === "black",
        [styles.secondary]: type === "secondary"
      })}
    >
      {children}
    </button>
  );
}

export default Button;
