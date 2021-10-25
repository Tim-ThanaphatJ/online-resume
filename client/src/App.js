// React
import React, { useEffect } from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/pages/main/Main";

// CSS
import "./App.css";

// Scroll Out
import ScrollOut from "scroll-out";

function App() {

  // Mount
  useEffect(() => {
    ScrollOut({
      targets: "h1, h2, p, li",
    });
  }, []);

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
