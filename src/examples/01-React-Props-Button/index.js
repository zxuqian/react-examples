import React from "react";
import Button from "./Button";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function ButtonDemo({ className, ...rest }) {
  return (
    <main className={classNames(styles.mainContainer, className)} {...rest}>
      <div className={styles.btnContainer}>
        <Button>默认按钮</Button>
        <Button color="red">红色按钮</Button>
        <Button color="black">黑色按钮</Button>
        <Button type="secondary">线框按钮</Button>
        <Button type="secondary" color="red">
          线框按钮
        </Button>
        <Button type="secondary" color="black">
          线框按钮
        </Button>
      </div>
    </main>
  );
}
