import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Jumbotron />
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
