import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from '../container/Home';
import Checkout from '../container/Checkout';
import Information from '../container/Information';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/Notfound';
import Layout from '../components/Layout';
import useInicialState from '../hooks/useInicialState';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Deporte from '../components/categories/Deporte';
import Tecnologia from '../components/categories/Tecnologia';
import CocinaAlimentos from '../components/categories/Cocina-alimentos';
import Hogar from '../components/categories/Hogar';
import SaludBelleza from '../components/categories/SaludBelleza';
import Automotriz from '../components/categories/Automotriz';
import Juguetes from '../components/categories/Juguetes';
import Moda from '../components/categories/Moda';
import Marcketplace from '../components/categories/Marcketplace';

function App() {
  const inicialState = useInicialState();

  return (
    <AppContext.Provider value={inicialState}>
      <BrowserRouter>
        <Header/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="/deporte" element={<Deporte />} />
            <Route path="/hogar" element={<Hogar />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/cocina-y-alimentos" element={<CocinaAlimentos />} />
            <Route path="/salud-y-belleza" element={<SaludBelleza/>} />
            <Route path="/automotriz" element={<Automotriz />} />
            <Route path="/juguetes" element={<Juguetes />} />
            <Route path="/moda" element={<Moda />} />
            <Route path="/marketplace" element={<Marcketplace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Footer/>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
