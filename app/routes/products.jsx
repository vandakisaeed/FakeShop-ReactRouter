import { useState } from "react";

export const loader = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("sth went wrong");
  }
  const products = await res.json();
  return products;
};

export const hydrateFallback = () => {
  return <div>loading ...</div>;
};

const Products = ({ loaderData }) => {
  const [category, setCategory] = useState("all");

  // filter products
  const filteredProducts =
    category === "all"
      ? loaderData
      : loaderData.filter((el) => el.category === category);

  return (
    <div className="p-4">
      {/* Filter buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className="btn btn-ghost"
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => setCategory("men's clothing")}
        >
          Men
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => setCategory("women's clothing")}
        >
          Women
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => setCategory("jewelery")}
        >
          Jewelery
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((el) => (
          <div key={el.id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="h-60 flex justify-center">
              <img
                src={el.image}
                alt={el.title}
                className="object-contain h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{el.title}</h2>
              <p className="line-clamp-2">{el.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
