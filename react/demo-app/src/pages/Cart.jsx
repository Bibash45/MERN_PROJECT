import React, { useEffect, useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const CartData = JSON.parse(localStorage.getItem("cartData"));
    setProducts(CartData);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-5">
          {products.length === 0 ? (
            <h2 className="text-center text-danger">Your cart is Empty</h2>
          ) : (
            <>
              <h2 className="text-center text-success">Your cart Items</h2>
              <div className="col-md-8">
                {products.map((item) => (
                  <>
                    <div className="row d-flex align-items-center ">
                      <div className="col-2">
                        <img src={item.image} alt={item.title} width={100} />
                      </div>
                      <div className="col-4">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      </div>
                      <div className="col-1">
                        <p className="text-warning">
                          <strong>${item.price}</strong>
                        </p>
                      </div>
                      <div className="col-3">
                        <button className="btn btn-primary">+</button>
                        &nbsp;
                        <span>1</span>
                        &nbsp;
                        <button className="btn btn-danger">-</button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
              <div className="col-md-3">
                <h2>Cart Summary</h2>
                <hr />
                <p>
                  <strong>Units:</strong>5
                </p>
                <hr />
                <p>
                  <strong>Total:</strong> $100
                </p>
                <hr />
                <button className="btn btn-warning">Check Our</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
