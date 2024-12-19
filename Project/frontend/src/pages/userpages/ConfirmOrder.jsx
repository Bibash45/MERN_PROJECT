import React, { useEffect, useState } from "react";

const ConfirmPage = () => {
  const [shipping, setshipping] = useState(10);
  const [tax, setTax] = useState(0.3);
  const [cartData, setCardData] = useState([]);

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};
  const orderItems = [
    { name: "iPhone 11 Pro 256GB Memory", qty: 6, price: 1 },
    { name: "Cannon EOS 80D DSLR Camera", qty: 4, price: 1 },
    { name: "Pistol", qty: 6, price: 22 },
    { name: "Logitech G-Series Gaming Mouse", qty: 1, price: 1 },
  ];
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Math.round(itemsPrice * 0.15);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems"));
    if (data) {
      const updatedData = data.map((item) => ({
        ...item,
        unitPrice: item.unitPrice || item.price,
      }));
      setCardData([...updatedData]);
    }
  }, []);

  useEffect(() => {
    const total = cartData.reduce((acc, item) => acc + Number(item.price), 0);
    if (total > 200) {
      setshipping(0);
    } else {
      setshipping(10);
    }
  }, [cartData]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Shipping Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-4">
              Shipping
            </h2>
            <p>
              <span className="font-semibold">Name:</span> Bibash Cdry
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:bibashcdry46@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                bibashcdry46@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {`${shippingInfo.shippingaddress1}, ${shippingInfo.city}, ${shippingInfo.zip}, ${shippingInfo.country}`}
            </p>
          </div>

          {/* Order Items Section */}
          <div className="bg-white pt-6 pl-6 pb-2 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-4">
              Order Items
            </h2>
            <ul className="divide-y divide-gray-200">
              {cartData.map((item, index) => (
                <li
                  key={index}
                  className="pt-4 flex flex-col  sm:flex-row justify-around items-center "
                >
                  <span>
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className=" sm:w-[80px] sm:h-[80px] h-[150px] w-[150px] "
                    />
                  </span>
                  <span className="font-semibold">{item.name}</span>
                  <span>
                    {item.quantity} x ${item.unitPrice} = ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-4">
              Order Summary
            </h2>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between">
                <span>Items</span>
                <span>
                  ${cartData.reduce((acc, item) => acc + Number(item.price), 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                {shipping === 0 ? <span>Free</span> : <span>${shipping}</span>}
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>
                  $
                  {tax *
                    cartData.reduce((acc, item) => acc + Number(item.price), 0)}
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total</span>
                <span>
                  $
                  {tax *
                    cartData.reduce((acc, item) => acc + Number(item.price), 0) +
                    cartData.reduce(
                      (acc, item) => acc + Number(item.price),
                      0
                    ) +
                    shipping}
                </span>
              </div>
            </div>
            <button
              className="w-full mt-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => alert("Test Pay Order")}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
