import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css"
import AboutUpper from "./components/AboutUpper";
import Services from "./pages/Services";
import CarDetails from "./pages/CarDetails";
import Orders from "./pages/Orders";

function App() {
  const car = {
    id:9,
    name:"About Us",
    price:"Everything you need to build an amazing dealership website.",
    src:"/car2.png"
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<AboutUpper car={car}/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cardetails/:id" element={<CarDetails/>}/>
      <Route path="/orders" element={<Orders/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
