import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './components/Banner';
import Userfriendly from './components/Userfriendly';
import Textuer from'./components/Texter';
import SilderCustome from './components/Carsilder';
import MobileScreen from './components/MobileScreen';
import Footer from './components/Footer'






function App() {
  return (
    <div>
      <Router>
        <Header />
        <Banner />
        <Userfriendly />
        <Textuer />
        <SilderCustome />
        <MobileScreen />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
