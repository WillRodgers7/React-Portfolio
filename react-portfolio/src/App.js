import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
// import About from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
