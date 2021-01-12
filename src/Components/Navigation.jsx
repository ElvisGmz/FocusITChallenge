import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import Disc from "./Disc";
import DiscEdit from "./DiscEdit";
import { AuthGlobal } from "../context/store/Auth";

export default function Navigation() {
  const { stateUser } = useContext(AuthGlobal);
  return (
      <BrowserRouter>
        {stateUser.isAuthenticated ? (<NavBar />) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (stateUser.isAuthenticated ? <Home /> : <Redirect to="/login" />)}
          />
          <Route
            path="/login"
            render={() => (stateUser.isAuthenticated == false ? <Login /> : <Redirect to="/" />)}
          />
          <Route
            path="/edit/:id"
            component={stateUser.isAuthenticated ? DiscEdit : <Redirect to="/login" />}
          />
          <Route
            path="/discapacidad"
            render={() => (stateUser.isAuthenticated ? <Disc /> : <Redirect to="/login" />)}
          />
        </Switch>
      </BrowserRouter>
  );
}
