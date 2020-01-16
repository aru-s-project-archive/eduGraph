import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import temp from "./pages/Summary";
import Dashboard from "./pages/Dashboard/index";
import CustomNavbar from "./globalComponents/Navbar";
import StudySession from "./pages/StudySession/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index";
import Courses from "./pages/Courses/index";
import NotFound from "./pages/NotFound";
import Notes from "./pages/Notes";
import Temp from "./pages/temp";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/testing" component={CustomNavbar} />
      <Route path="/session" component={StudySession} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/courses" component={Courses} />
      <Route path="/notes" component={Notes} />
      <Route path="/temp" component={Temp}></Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
