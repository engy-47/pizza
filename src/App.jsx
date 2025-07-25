import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import HomePage from './components/Home/HomePage';
import LoginPage from './components/Home/LoginPage';
import RegisterPage from './components/Home/RegisterPage';
import ProductsPage from './components/Home/ProductsPage';
import CartPage from './components/Home/CartPage';
import Footer from './components/Footer/footer';
import NavbarComponent from './components/NavbarComponent';
import { CartProvider } from './components/Home/CartContext';

import MyBoxPage from './components/Myboxrange/MyboxRange';
import SpecialOffersPage from './components/Myboxrange/SpecialOffer';
import ForSharingPage from './components/Myboxrange/ForSharing';
import ForOnePage from './components/Myboxrange/ForOne';
import StartersPage from './components/Myboxrange/Starters';
import PizzaPage from './components/Myboxrange/Pizza';
import HutFavorite from './components/Myboxrange/HutFavorites';
import HutSignatures from './components/Myboxrange/HutSignatures';
import DrinksDesserts from './components/Myboxrange/Drinks';
import Kids from './components/Myboxrange/Kids';
import MyFavourite from './components/Myboxrange/MyFavourite';
import Dips from './components/Myboxrange/Dips';
import BuildYourOwn from './components/Myboxrange/Build';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/my-box" element={<MyBoxPage />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/for-sharing" element={<ForSharingPage />} />
          <Route path="/for-one" element={<ForOnePage />} />
          <Route path="/starters" element={<StartersPage />} />
          <Route path="/pizza" element={<PizzaPage />} />
          <Route path="/hut-favorite" element={<HutFavorite />} />
          <Route path="/hut-signatures" element={<HutSignatures />} />
          <Route path="/drinks-desserts" element={<DrinksDesserts />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/my-favourite" element={<MyFavourite />} />
          <Route path="/dips-seasoning" element={<Dips />} />
          <Route path="/build-your-own" element={<BuildYourOwn />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
