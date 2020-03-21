import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Gradient() {
  // 设置两个 state，给默认值
  const [color1, setColor1] = useState("#00F260");
  const [color2, setColor2] = useState("#0575E6");

  // 统一处理 input change，或者也可以分开，如果有不同的处理逻辑的话
  function handleInputChange(e) {
    const { name, value } = e.target;
    // 使用 name 区分，这里也可以用 switch
    if (name === "color1") {
      setColor1(value);
    } else if (name === "color2") {
      setColor2(value);
    }
  }

  // 重置按钮事件
  function handleClick() {
    setColor1("#00F260");
    setColor2("#0575E6");
  }

  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(75deg, ${color1}, ${color2})`
      }}
    >
      <div className={styles.inputGroup}>
        <label>请选择第一个颜色</label>
        <input
          type="color"
          name="color1"
          className={styles.inputColor}
          value={color1}
          onChange={handleInputChange} // 也可以直接写箭头函数
        />
      </div>
      <div className={styles.inputGroup}>
        <label>请选择第二个颜色</label>
        <input
          type="color"
          name="color2"
          className={styles.inputColor}
          value={color2}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleClick} className={styles.button}>
        重置为默认
      </button>
    </div>
  );
}
