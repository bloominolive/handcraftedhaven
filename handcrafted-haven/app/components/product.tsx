// Product.tsx
import React from 'react';

// Define the interface outside of the component
interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    seller: string;
    price: number;
    imageUrl: string;
  };
}

// Use the interface for typing the component props
const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Seller: {product.seller}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default Product;

