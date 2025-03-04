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
import Culture from "./components/Culture";
import Travel from "./components/Travel";
const AppRouter = () => {
  return(
    <div>
    <Navbar />
    <Menu />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/earth" element={<Earth />} />
        {/* Add more routes here */}
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </div>
  </div>
  )
}

export { AppRouter };