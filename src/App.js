import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/JS/Navbar";
import Home from "./Component/JS/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footerbody from "./Component/JS/Footerbody";
import MessengerCustomerChat from "react-messenger-customer-chat";
import SmallBasket from "./Component/JS/SmallBasket";
import { useSelector } from "react-redux";
import { selectsmallbasket, selectsmalllogin, selectsmallprofile } from "./features/detailSlice";
import SmallProfile from "./Component/JS/SmallProfile";
import LoginPage from "./Component/JS/LoginPage";

function App() {
  const smallbask = useSelector(selectsmallbasket);
  const smallprof = useSelector(selectsmallprofile);
  const smalllogi = useSelector(selectsmalllogin);
  return (
    <Router>
      <div className="App">
        <Navbar />
        {smallbask ? <SmallBasket /> : ""}
        {smallprof ? <SmallProfile /> : ""}
        {smalllogi ? <LoginPage /> : ""}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footerbody />
        <MessengerCustomerChat pageId="101770975671422" appId="609730640042208" />
      </div>
    </Router>
  );
}

export default App;
