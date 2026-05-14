import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((item) => (
        <p key={item.id}>
          {item.name} - ₹{item.price}
        </p>
      ))}
    </div>
  );
}

export default ProductList;