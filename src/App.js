import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import About from "./pages/About";
import Sort from "./pages/Sort";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/sort" component={Sort} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





 


