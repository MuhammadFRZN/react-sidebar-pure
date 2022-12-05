import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import HomeOne from "./pages/home/HomeOne";
import HomeTwo from "./pages/home/HomeTwo";
import AboutOne from "./pages/about/AboutOne";
import AboutTwo from "./pages/about/AboutTwo";
import ContactOne from "./pages/contact/ContactOne";
import ContactTwo from "./pages/contact/ContactTwo";
import GalleryOne from "./pages/Gallery/GalleryOne";
import GalleryTwo from "./pages/Gallery/GalleryTwo";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/home/subcat1">
          <HomeOne />
        </Route>
        <Route path="/home/subcat2">
          <HomeTwo />
        </Route>

        <Route path="/about/subcat1">
          <AboutOne />
        </Route>
        <Route path="/about/subcat2">
          <AboutTwo />
        </Route>

        <Route path="/contact/subcat1">
          <ContactOne />
        </Route>
        <Route path="/contact/subcat2">
          <ContactTwo />
        </Route>

        <Route path="/gallery/subcat1">
          <GalleryOne />
        </Route>
        <Route path="/gallery/subcat2">
          <GalleryTwo />
        </Route>
      </Switch>
    </div>
  );
}
