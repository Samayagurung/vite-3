import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resp = await axios.get(URL + "/products");
        // console.log(resp.data.products)
        setProduct(resp.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {product.map((item) => {
          return <ProductList prodX={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
