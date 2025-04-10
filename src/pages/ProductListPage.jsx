// src/pages/ProductListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Product One',
    image: 'https://via.placeholder.com/200',
    price: '$49.99',
  },
  {
    id: '2',
    name: 'Product Two',
    image: 'https://via.placeholder.com/200',
    price: '$79.99',
  },
  {
    id: '3',
    name: 'Product Three',
    image: 'https://via.placeholder.com/200',
    price: '$99.99',
  },
];

const ProductListPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-green-600 font-bold">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
