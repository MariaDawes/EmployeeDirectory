import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  document.title = "Directory Searcher";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Directory} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/sort" component={Sort} />
          <Route exact path="/filter" component={Filter} />
        </Wrapper>
      </div>
    </Router>

    <div className="container text-center">
      <h1 className="mt-4 mb-4">Employee Directory</h1>
      <div className="jumbotron">
          <UserCard />
      </div>
    </div>
  )
}

export default App;





 


