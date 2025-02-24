import './App.css';
import Nav_section from './components/Nav_section';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Order_online from './components/Order_online';
import Login from './components/Login';
function App() {
  return (
    <>
    <Router>
      <Nav_section/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<Order_online />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
