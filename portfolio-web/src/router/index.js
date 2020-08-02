import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Portfolio from "../pages/Portfolio";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Router = (props) => {
  const route = useSelector((state) => state.routes.currentPage);

  switch (route) {
    case "portfolio":
      return (
        <Fragment>
          <Header />
          <Portfolio />
        </Fragment>
      );
    default:
      return <h1>Error: invalid page selected</h1>;
  }
};

Router.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Router;
