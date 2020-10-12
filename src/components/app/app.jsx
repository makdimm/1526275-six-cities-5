import React from "react";
import MainSmart from "../mainSmart/mainSmart";
import PropTypes from "prop-types";

const App = ({ placesCount }) => {
  return <MainSmart placesCount={placesCount} />;
};
App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
