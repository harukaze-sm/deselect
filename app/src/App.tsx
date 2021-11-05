import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./components/Create";
import Students from "./components/Students";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/new" component={Create} exact />
        <Route path="/" component={Students} exact />
        <Route path="/home" component={Students} exact />
      </Router>
    </>
  );
};

export default App;
