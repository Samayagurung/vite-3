import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddModal from "../components/AddModal";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);

  const [addShow, setAddShow] = useState(false);

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

  const addHandle = (e) => {
    e.preventDefault();
    // console.log('clicked')
    setAddShow(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setAddProduct((prev) => {
      // console.log({...prev,[e.target.name]:e.target.value})
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    // console.log("clicked")
    setProduct([addProduct, ...product]);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAddShow(false);
  };

  return (
    <>
      <button className="btn btn-outline-dark mt-3 ms-3" onClick={addHandle}>
        {" "}
        Add Product
      </button>
      <div className="d-flex flex-wrap justify-content-center">
        {product.map((item) => {
          return <ProductList prodX={item} />;
        })}
      </div>
      <AddModal
        addShow={addShow}
        handleClose={handleClose}
        handleChange={handleChange}
        addHandler={addHandler}
      />
    </>
  );
};

export default Products;
