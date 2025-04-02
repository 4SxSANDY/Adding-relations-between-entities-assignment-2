import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {product.avgRating} ⭐ ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

// Styling
const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    margin: "20px auto",
    width: "300px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "8px"
  }
};

export default ProductCard;
