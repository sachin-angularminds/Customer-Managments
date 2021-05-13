import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar';
import Customerform from './components/Customerform'
import Customerlist from './components/Customerlist';
import Customerview from './components/Customerview';
import Customeredit from './components/Customeredit';



function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Customerform} />
          <Route exact path="/customerlist" component={Customerlist} />
          <Route exact path="/customerview/:_id" component={Customerview} />
          <Route exact path="/customeredit/:_id" component={Customeredit} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
