import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/home-page/index";
import PortfolioPage from "./components/portfolio-page/index";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio/index.html" component={PortfolioPage} />
      </div>
    </Router>
  );
}

export default App;
