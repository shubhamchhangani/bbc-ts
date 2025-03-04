import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Earth from "./components/Earth";
import News from "./components/News";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Business from "./components/Business";
import Innovation from "./components/Innovation";
const AppRouter = () => {
  return(
    <div>
    <Navbar />
    <Menu />
    <div className="content">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/earth" element={<Earth />} />
        {/* Add more routes here */}
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/innovation" element={<Innovation />} />
      </Routes>
    </div>
  </div>
  )
}

export { AppRouter };