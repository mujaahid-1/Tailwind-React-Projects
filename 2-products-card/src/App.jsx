import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Loader from "./components/Loader";
import Error from "./components/Error";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Request failed.");
        const data = await res.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (err) {
        setError(`${err.message} products.`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="bg-wheat">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default App;
