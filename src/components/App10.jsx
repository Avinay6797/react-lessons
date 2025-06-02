import React, { useState } from 'react';

function App10() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 23 },
    { id: 2, name: 'Product 2', price: 45 },
  ];

  const add = (p) => {
    const found = cart.find(i => i.id === p.id);
    setCart(found
      ? cart.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      : [...cart, { ...p, qty: 1 }]
    );
  };

  const change = (id, n) => {
    setCart(cart
      .map(i => i.id === id ? { ...i, qty: i.qty + n } : i)
      .filter(i => i.qty > 0)
    );
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price} <button onClick={() => add(p)}>Add</button>
        </div>
      ))}

      <hr />

      <h3>My Cart</h3>
      {cart.map(i => (
        <div key={i.id}>
          {i.name} - <button onClick={() => change(i.id, -1)}>-</button>
          {i.qty}
          <button onClick={() => change(i.id, 1)}>+</button> - ${i.price * i.qty}
        </div>
      ))}
    </div>
  );
}

export default App10;
