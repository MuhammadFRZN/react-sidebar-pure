import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </div>
  );
}
