import React, { useEffect } from "react";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { connect } from "react-redux";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/privateRoute";
import Feed from "./components/feed.js";
import ResetPassword from "./components/resetPassword";
import Home from "./components/home/home";
import CreateQuery from "./components/createQuery";
import Navbar from "./components/navbar";
import SingleQuery from "./components/singleQuery";
import Error from "./components/error";
import SolvedFeeds from "./components/solvedFeeds";

function App({ loading, setUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // added event listener
      setUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <>
      {!loading && (
        <>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/forget-password" component={ResetPassword} />
              <PrivateRoute
                exact
                path="/create-query"
                component={CreateQuery}
              />
              <Route exact path="/solved-feeds" component={SolvedFeeds} />
              <Route exact path="/single-query/:id" component={SingleQuery} />
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/feeds" component={Feed} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.currentUser.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch({ type: "SET_CURRENT_USER", payload: { user: user } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
