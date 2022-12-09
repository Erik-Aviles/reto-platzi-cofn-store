import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../container/Home';
import Checkout from '../container/Checkout';
import Information from '../container/Information';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/Notfound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInicialState from '../hooks/useInicialState';

function App() {
  const inicialState = useInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
