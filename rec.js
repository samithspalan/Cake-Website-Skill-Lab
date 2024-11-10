import React, { useState } from 'react';

const CakeDetails = ({ cake }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add the cake to the cart
    console.log(`${cake.name} added to the cart with quantity: ${quantity}`);
  };

  return (
    <div className="cake-details">
      <h1>{cake.name}</h1>
      <img src={cake.imageUrl} alt={cake.name} />
      <p><strong>Ingredients:</strong> {cake.ingredients}</p>
      <p><strong>Price:</strong> ${cake.price}</p>
      <div>
        <strong>Size Options:</strong>
        <select>
          {cake.sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <strong>Quantity:</strong>
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        {quantity}
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
