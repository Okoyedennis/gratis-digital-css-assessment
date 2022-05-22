import './App.css';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from './pages/ContactUs/Contact';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
