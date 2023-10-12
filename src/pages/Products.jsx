import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddModal from "../components/AddModal";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);
  const [editProduct, setEditProduct] = useState([]);

  const [addShow, setAddShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

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

  const viewHandle = (e, id) => {
    e.preventDefault();
    // console.log("clicked")
    setViewShow(true);

    const viewProd = product.find((item) => {
      console.log(item.id === id);
      return item.id === id;
    });
    setViewProduct(viewProd);
  };

  const viewCloseHandle = (e) => {
    e.preventDefault();
    setViewShow(false);
  };

  // Edit Product

  const editHandle = (e, id) => {
    e.preventDefault();
    // console.log("click")
    setEditShow(true);

    const editProd = product.find((item) => {
      return item.id === id;
    });
    setEditProduct(editProd);
  };

  const editChangeHandle = (e) => {
    e.preventDefault();
    setEditProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const editCloseHandle = (e) => {
    e.preventDefault();
    setEditShow(false);
  };

  const editProductHandle = (e) => {
    e.preventDefault();
    // console.log("clicked", editProduct)
    const updatedProduct = product.map((item) => {
      return item.id === editProduct.id ? editProduct : item;
    });
    setProduct(updatedProduct);
    setEditShow(false);
  };

  return (
    <>
      <button className="btn btn-outline-dark mt-3 ms-3" onClick={addHandle}>
        {" "}
        Add Product
      </button>
      <div className="d-flex flex-wrap justify-content-center">
        {product.map((item) => {
          return (
            <ProductList
              prodX={item}
              deleteHandle={deleteHandle}
              viewHandle={viewHandle}
              editHandle={editHandle}
            />
          );
        })}
      </div>
      <AddModal
        addShow={addShow}
        handleClose={handleClose}
        handleChange={handleChange}
        addHandler={addHandler}
      />
      <ViewModal
        viewShow={viewShow}
        viewProdX={viewProduct}
        viewCloseHandle={viewCloseHandle}
      />
      <EditModal
        showEdit={editShow}
        editChangeHandle={editChangeHandle}
        editProdX={editProduct}
        editProductHandle={editProductHandle}
        editCloseHandle={editCloseHandle}
      />
    </>
  );
};

export default Products;
