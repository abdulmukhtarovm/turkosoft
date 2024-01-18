import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import './sass/main.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import OkulAile from './pages/OkulAile.jsx';
import Up from './components/Up.jsx';
import ScrollToTop from './components/ScrollToTop.js';
import MentalUp from './pages/MentalUp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop/>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/about" exact element={<AboutPage />} />
      <Route path="/services" exact element={<ServicesPage />} />
      <Route path="/contacts" exact element={<ContactsPage />} />
      <Route path="/okulAile" exact element={<OkulAile />} />
      <Route path="/mentalup" exact element={<MentalUp />} />
    </Routes>
    <Footer />
    <Up />
  </HashRouter>
);