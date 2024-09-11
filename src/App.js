import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { products as initialProducts } from './data';

const App = () => {
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) &&
        (filters.price ? product.price <= filters.price : true)
      );
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Sidebar filters={filters} onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;