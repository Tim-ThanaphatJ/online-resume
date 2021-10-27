// React
import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/pages/main/Main";

// CSS
import "./App.css";

function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
