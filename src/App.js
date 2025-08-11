import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Service from './pages/Service';
import Home from './pages/Home';
import Careers from './pages/Careers';
import ServiceDetailsArea from './components/ServiceDetailsArea';
import ScrollToTop from './components/ScrollToTop';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service
        />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route path="/service-details/:id" element={<ServiceDetailsArea />} />
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
