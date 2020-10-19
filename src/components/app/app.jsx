import React from "react";
import MainSmart from "../mainSmart/mainSmart";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Offer from "../Offer/Offer";
import Favorites from "../Favorites/Favorites";
import SignIn from "../SignIn/SignIn";

const App = ({ placesCount }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainSmart placesCount={placesCount} />;
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/offer/:id?" exact component={Offer} />
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
