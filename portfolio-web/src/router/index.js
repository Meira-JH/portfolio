import React from "react";
import Portfolio from "../pages/Portfolio";
import { useSelector } from "react-redux";
import Header from "../containers/Header";
import { BrowserRouter } from "react-router-dom";

const Router = (props) => {

  const route = useSelector((state) => state.routes.currentPage);

  switch (route) {
    case "portfolio":
      return (
        <BrowserRouter>
          <Header />
          <Portfolio />
        </BrowserRouter>
      );
    default:
      return <h1>Error: invalid page selected</h1>;
  }
};

export default Router;
