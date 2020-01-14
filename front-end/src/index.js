import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Graph';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import temp from "./pages/Summary";
const routing = 
<Router>
    <Switch>
        {/* <Route exact path="/"></Route> */}
        <Route path="/course/graph" component={App}/>
        <Route path="/temp" component={temp}/>
    </Switch>
</Router>

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
