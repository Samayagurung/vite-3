import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddModal from "../components/AddModal";
import ViewModal from "../components/ViewModal";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);

  const [addShow, setAddShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

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

  // Add Product

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

  //  Delete Product

  const deleteHandle = (e, id) => {
    e.preventDefault();
    // console.log("clicked")
    const filteredProduct = product.filter((prod) => {
      return prod.id !== id;
    });
    setProduct(filteredProduct);
  };

  // View Product

  const viewHandle=(e,id)=>{
    e.preventDefault();
    // console.log("clicked")
    setViewShow(true)

    const viewProd= product.find((item)=>{
      console.log(item.id === id)
      return item.id === id;
    })
    setViewProduct(viewProd)
  }

  const viewCloseHandle =(e)=>{
    e.preventDefault();
    setViewShow(false)
  }



  return (
    <>
      <button className="btn btn-outline-dark mt-3 ms-3" onClick={addHandle}>
        {" "}
        Add Product
      </button>
      <div className="d-flex flex-wrap justify-content-center">
        {product.map((item) => {
          return <ProductList prodX={item} deleteHandle={deleteHandle} viewHandle={viewHandle} />;
        })}
      </div>
      <AddModal
        addShow={addShow}
        handleClose={handleClose}
        handleChange={handleChange}
        addHandler={addHandler}
      />
      <ViewModal viewShow={viewShow} viewProdX={viewProduct} viewCloseHandle={viewCloseHandle}/>
    </>
  );
};

export default Products;
