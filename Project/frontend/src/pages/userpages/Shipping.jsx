import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "countries-list";

const Shipping = () => {
  const navigate = useNavigate();
  const countryList = Object.values(countries);
  const shipppinginfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};

  const [shippingaddress1, setShippingAddress1] = useState(
    shipppinginfo.shippingaddress1 || ""
  );
  const [shippingaddress2, setShippingAddress2] = useState(
    shipppinginfo.shippingaddress2 || ""
  );
  const [city, setCity] = useState(shipppinginfo.city || "");
  const [country, setCountry] = useState(shipppinginfo.country || "");
  const [zip, setZip] = useState(shipppinginfo.zip || "");
  const [phone, setPhone] = useState(shipppinginfo.phone || "");

  const submitHandler = (e) => {
    e.preventDefault();
    const shippingInfo = {
      shippingaddress1: shippingaddress1,
      shippingaddress2: shippingaddress2,
      city: city,
      country: country,
      zip: zip,
      phone: phone,
    };
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    navigate("/confirm");
  };

  return (
    <div className="flex">
      <form className="w-[700px] " onClick={submitHandler}>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Shipping address 1
          </label>
          <input
            onChange={(e) => setShippingAddress1(e.target.value)}
            value={shippingaddress1}
            type="text"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter a product name"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Shipping address2
          </label>
          <input
            onChange={(e) => setShippingAddress2(e.target.value)}
            value={shippingaddress2}
            type="text"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            City
          </label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            country
          </label>
          <select onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select a country</option>
            {countryList.map((country, index) => {
              return <option key={index}>{country.name}</option>;
            })}
          </select>
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            zip code
          </label>
          <input
            onChange={(e) => setZip(e.target.value)}
            value={zip}
            type="number"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter product price"
            required
          />
        </div>

        <button
          type="submit"
          className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full text-white"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Shipping;
