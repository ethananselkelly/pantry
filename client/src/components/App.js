import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "../assets/scss/main.scss";

import getCurrentUser from "../services/getCurrentUser";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import IngredientsIndex from "./IngredientsIndex";
import IngredientSearchPage from "./IngredientSearchPage";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
          <div className='home-page'>
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <body>

            <h2>Welcome to your pantry</h2>
          </body>
        </Route>
        
        <Route exact path="/ingredients" component={IngredientsIndex} />
        <Route exact path="/ingredients/search">
          <IngredientSearchPage user={currentUser} />
        </Route>
        
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
          </div>
  );
};

export default hot(App);
