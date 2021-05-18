import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/home-page";
import PortfolioPage from "./components/portfolio-page";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
      </div>
    </Router>
  );
}

export default App;
