// routes/checkout.jsx
import { useEffect } from "react";
import { Link } from "react-router";
import { useDemoContext } from "./context/Usecontext";

// loader prevents GET /checkout error
//export const loader = () => null;

export default function checkout() {
  const{category,setCategory,incart,setIncart,counter,setCounter,sumPrice,setSumPrice,filteredProducts,handleFn}=useDemoContext()
  

  // ----- LocalStorage helpers -----
  const saveCart = () => localStorage.setItem("cart", JSON.stringify(incart));

  const loadCart = () => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setIncart(saved);
    const newCount = saved.reduce((a, i) => a + (i.count || 0), 0);
    const newSum = saved.reduce((a, i) => a + i.price * (i.count || 0), 0);
    setCounter(newCount);
    setSumPrice(Number(newSum.toFixed(2)));
  };

  const clearSavedCart = () => localStorage.removeItem("cart");

  // Load saved cart automatically once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    if (saved.length) loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Remove single item from cart
  const removeItem = (product) => {
    const newCart = incart.filter((i) => i.id !== product.id);
    setIncart(newCart);

    const newCount = newCart.reduce((a, i) => a + (i.count || 0), 0);
    const newSum = newCart.reduce((a, i) => a + i.price * (i.count || 0), 0);
    setCounter(newCount);
    setSumPrice(Number(newSum.toFixed(2)));
  };

  // Clear entire cart
  const clearCart = () => {
    setIncart([]);
    setCounter(0);
    setSumPrice(0);
  };

  // Empty cart UI
  if (!incart || incart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="mb-6">Your cart is empty 🛒</p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn btn-primary">Go shopping</Link>
          <button onClick={loadCart} className="btn btn-secondary">Load Saved Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {/* Cart actions */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        <button onClick={saveCart} className="btn btn-primary">Save</button>
        <button onClick={loadCart} className="btn btn-secondary">Load</button>
        <button onClick={clearSavedCart} className="btn btn-outline">Clear Saved</button>
        <button onClick={clearCart} className="btn btn-error">Clear Cart</button>
      </div>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="w-1/2">Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Row Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incart.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title} className="h-16 w-16 object-contain rounded" />
                  <span className="font-medium">{product.title}</span>
                </div>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.count}</td>
              <td>${(product.price * product.count).toFixed(2)}</td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-outline btn-error" onClick={() => handleFn(product, "decrease")}>−</button>
                <button className="btn btn-sm btn-success" onClick={() => handleFn(product, "increase")}>+</button>
                <button className="btn btn-sm btn-error" onClick={() => removeItem(product)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3} className="text-right">Total Items:</th>
            <th>{counter}</th>
            <th />
          </tr>
          <tr>
            <th colSpan={3} className="text-right">Total Price:</th>
            <th>${sumPrice.toFixed(2)}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
