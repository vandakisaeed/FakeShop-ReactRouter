import { Outlet ,useLoaderData} from "react-router";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import {Creatcontext} from './context/Creatcontext'
import { useState } from "react";


export const loader = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("sth went wrong");
  }
  const products = await res.json();
  return products;
};

export default function RootLayout() {
  const  loaderData = useLoaderData();

  const [category, setCategory] = useState("all");
  
    // cart
    const [incart, setIncart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [sumPrice, setSumPrice] = useState(0);
  
    // filter products
    const filteredProducts =
      category === "all"
        ? loaderData
        : loaderData.filter((el) => el.category === category)|| [];
  
    // handle add/remove
    const handleFn = (product, type) => {
      setIncart((prev) => {
        const exist = prev.find((item) => item.id === product.id);
  
        if (exist) {
          if (type === "increase") {
            return prev.map((item) =>
              item.id === product.id ? { ...item, count: item.count + 1 } : item
            );
          } else if (type === "decrease") {
            return prev
              .map((item) =>
                item.id === product.id
                  ? { ...item, count: Math.max(item.count - 1, 0) }
                  : item
              )
              .filter((item) => item.count > 0);
          }
        }
  
        if (type === "increase") {
          return [...prev, { ...product, count: 1 }];
        }
        return prev;
      });
  
      if (type === "increase") {
        setCounter((prev) => prev + 1);
        setSumPrice((prev) =>
          Number((prev + product.price).toFixed(2))
        );
      } else if (type === "decrease") {
        setCounter((prev) => (prev > 0 ? prev - 1 : 0));
        setSumPrice((prev) =>
          prev > product.price
            ? Number((prev - product.price).toFixed(2))
            : 0
        );
      }
    };

  return (
    <>
    <Creatcontext value={{category,setCategory,incart,setIncart,counter,setCounter,sumPrice,setSumPrice,filteredProducts,handleFn}}>
      <Nav />
      <main>
        <Outlet /> {/* renders child routes like Home, About, etc */}
      </main>
      <Footer />
    </Creatcontext>
    </>
  );
}
