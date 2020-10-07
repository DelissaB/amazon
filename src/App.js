import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
// import Payment from "./Payment";
import Orders from "./Order";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<<< POWERFUL
  //piece of code which runs based on a given consition.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //the user is logged in... (pushing user into the data layer)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // return () => {
    //   //Any cleanup operations go in here...
    //   unsubscribe();
    // };
  }, []);

  // console.log("USER_IS >>> ", user);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* <Route path="payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
