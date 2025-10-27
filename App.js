import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';
import Header from './Header';

export default function App() {
  const [page, setPage] = useState('landing');
  return (
    <div>
      <Header setPage={setPage} />
      {page === 'landing' && <LandingPage setPage={setPage} />}
      {page === 'listing' && <ProductListingPage setPage={setPage} />}
      {page === 'cart' && <ShoppingCartPage setPage={setPage} />}
    </div>
  );
}
