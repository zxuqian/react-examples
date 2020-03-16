function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Button from "./Button";
import styles from "./styles.module.css";
import classNames from "classnames";
export default function ButtonDemo({
  className,
  ...rest
}) {
  return React.createElement("main", _extends({
    className: classNames(styles.mainContainer, className)
  }, rest), React.createElement("div", {
    className: styles.btnContainer
  }, React.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE"), React.createElement(Button, {
    color: "red"
  }, "\u7EA2\u8272\u6309\u94AE"), React.createElement(Button, {
    color: "black"
  }, "\u9ED1\u8272\u6309\u94AE"), React.createElement(Button, {
    type: "secondary"
  }, "\u7EBF\u6846\u6309\u94AE"), React.createElement(Button, {
    type: "secondary",
    color: "red"
  }, "\u7EBF\u6846\u6309\u94AE"), React.createElement(Button, {
    type: "secondary",
    color: "black"
  }, "\u7EBF\u6846\u6309\u94AE")));
}