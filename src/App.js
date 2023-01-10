import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Navbar from "./components/header/Header";
import {
  Home,
  About,
  Betting,
  Career,
  Guide,
  Blog,
  Contact,
  Brand,
  Complaince,
  Developer,
  Integration,
  Media,
  Entre,
  Why,
  Wall,
  Tutorial,
  Suscribe,
  Success,
  Status,
  Startup,
  School,
  Register,
  Pricing,
  Lookup,
  International,
  Documentation,
  Cooperate,
  Help,
  Demo,
  Login,
  
} from "./pages/index";
import { Star } from "@material-ui/icons";
function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/betting" element={<Betting />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/guide" element={<Guide />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/brand" element={<Brand />}></Route>
          <Route exact path="/complaince" element={<Complaince />}></Route>
          <Route exact path="/developer" element={<Developer />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/integration" element={<Integration />}></Route>
          <Route exact path="/why" element={<Why />}></Route>
          <Route exact path="/wall" element={<Wall />}></Route>
          <Route exact path="/demo" element={<Demo />}></Route>
          <Route exact path="/tutoriial" element={<Tutorial />}></Route>
          <Route exact path="/media" element={<Media />}></Route>
          <Route exact path="/success" element={<Success />}></Route>
          <Route exact path="/status" element={<Status />}></Route>
          <Route exact path="/startup" element={<Startup />}></Route>
          <Route exact path="/school" element={<School />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/cooperate" element={<Cooperate />}></Route>
          <Route exact path="/international" element={<International />}></Route>
          <Route exact path="/entre" element={<Entre />}></Route>
          <Route exact path="/lookup" element={<Lookup />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/suscribe" element={<Suscribe />}></Route>
          <Route exact path="/documentation" element={<Documentation />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
