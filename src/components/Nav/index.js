import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/button">按钮示例(React Props)</Link>
      <Link to="/gradient">渐变生成器(State 和 Event)</Link>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
