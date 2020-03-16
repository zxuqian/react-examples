import React from "react";
import PropTypes from "prop-types";
import StyledLayout from "./styles";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
