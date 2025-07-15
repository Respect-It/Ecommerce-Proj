import React from 'react';
import { products } from '../data';
import Cards from '../components/Cards';
import { useParams } from 'react-router-dom';
import { FaBoxOpen } from 'react-icons/fa';
import '../styles/Products.css';

function Products() {
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  const pageTitle = category
    ? `${category} Products`
    : 'All Products';

  return (
    <div className="products-wrapper">
      <div className="products-header glass-header">
        <h1>{pageTitle}</h1>
        <p>Explore our curated selection just for you.</p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <FaBoxOpen className="empty-icon" />
          <h2>No products found</h2>
          <p>We couldn't find anything under this category.</p>
        </div>
      ) : (
        <div className="product-grid animated-grid">
          {filteredProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
