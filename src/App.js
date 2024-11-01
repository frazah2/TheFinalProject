import React from 'react';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Destination from './components/destination/Destination';
import About from './components/about/AboutSec';
import Hotels from './components/hotels/Hotels';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
