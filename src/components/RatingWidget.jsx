import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    } else {
      alert("Please select a rating before submitting!");
    }
  };

  return (
    <div>
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              cursor: "pointer",
              color: star <= (hoveredRating || rating) ? "gold" : "gray"
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={styles.button}>Submit Rating</button>
    </div>
  );
};

// Styling
const styles = {
  button: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "5px"
  }
};

export default RatingWidget;
