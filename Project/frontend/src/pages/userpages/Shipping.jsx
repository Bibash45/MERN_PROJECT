import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "countries-list";
import Select from "react-select";

const cityZipMapping = {
  Kathmandu: "44600",
  Lalitpur: "44700",
  Bhaktapur: "44800",
  Pokhara: "33700",
  Biratnagar: "56700",
  Bharatpur: "44200",
  Hetauda: "44107",
  Janakpur: "45600",
  Dharan: "56703",
  Butwal: "32907",
  Dhangadhi: "10900",
  Itahari: "56705",
  Nepalgunj: "21900",
  Ghorahi: "22400",
  Tulsipur: "22415",
  Birtamod: "57204",
  Damak: "57217",
  Siddharthanagar: "32900",
  Banepa: "45210",
  Dhulikhel: "45200",
  Bhimdatta: "10400",
  Surkhet: "21700",
  Kalaiya: "44400",
  Gaur: "44500",
  Tansen: "32500",
  Jumla: "21200",
  Jomsom: "33100",
  Charikot: "45500",
  Dhankuta: "56800",
  Ilam: "57300",
  Kapilvastu: "32800",
  Kusma: "33400",
  Nuwakot: "44900",
  Okhaldhunga: "56100",
  Ramechhap: "45603",
  Sindhuli: "45900",
  Taplejung: "57500",
  Terhathum: "57000",
  Dolpa: "21400",
  Rukum: "22000",
};


const Shipping = () => {
  const navigate = useNavigate();
  const countryList = Object.values(countries);
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};

  const [shippingaddress1, setShippingAddress1] = useState(
    shippingInfo.shippingaddress1 || ""
  );
  const [shippingaddress2, setShippingAddress2] = useState(
    shippingInfo.shippingaddress2 || ""
  );
  const [city, setCity] = useState(shippingInfo.city || "");
  const [country, setCountry] = useState(shippingInfo.country || "");
  const [zip, setZip] = useState(shippingInfo.zip || "");
  const [phone, setPhone] = useState(shippingInfo.phone || "");

  const cityOptions = Object.keys(cityZipMapping).map((city) => ({
    value: city,
    label: city,
  }));

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption.value);
    setZip(cityZipMapping[selectedOption.value]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const shippingInfo = {
      shippingaddress1,
      shippingaddress2,
      city,
      country,
      zip,
      phone,
    };
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
    navigate("/confirm");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        onSubmit={submitHandler}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Shipping Information
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Shipping Address 1
          </label>
          <input
            onChange={(e) => setShippingAddress1(e.target.value)}
            value={shippingaddress1}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter address line 1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Shipping Address 2
          </label>
          <input
            onChange={(e) => setShippingAddress2(e.target.value)}
            value={shippingaddress2}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter address line 2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            City
          </label>
          <Select
            options={cityOptions}
            onChange={handleCityChange}
            placeholder="Select a city"
            value={cityOptions.find((option) => option.value === city)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            ZIP Code
          </label>
          <input
            value={zip}
            type="text"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Country
          </label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select a country</option>
            {countryList.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter phone number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Confirm Shipping
        </button>
      </form>
    </div>
  );
};

export default Shipping;
