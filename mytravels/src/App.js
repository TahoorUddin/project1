import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import Gallery from "./routes/Gallery";
import Plans from "./routes/Plans";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
