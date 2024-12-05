import { Link, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { isAuthenticated, signout } from "../../auth";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("home");

  const handleClick = (value) => {
    setCurrentState(value);
  };

  return (
    <>
  
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-14" alt="Hamro Bazar Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <span className="text-red-900">Hamro</span>
              <span className="text-amber-400">Bazar</span>
            </span>
          </Link>

         
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
          
            <Link
              to="/cart"
              className="text-3xl text-gray-500 dark:text-white hover:underline"
            >
              <FaCartArrowDown />
            </Link>

            
            {isAuthenticated() ? (
              <button
                type="button"
                onClick={() => signout(() => navigate("/login"))}
                className="text-white bg-gradient-to-r from-red-200 via-red-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-200 via-red-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>


      <nav className="bg-red-100 dark:bg-gray-700 shadow-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            
              <li onClick={() => handleClick("home")}>
                <Link
                  to="/"
                  className={`${
                    currentState === "home" ? "font-bold" : "text-gray-900"
                  } dark:text-white hover:underline`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

             
              <li onClick={() => handleClick("product")}>
                <Link
                  to="/product"
                  className={`${
                    currentState === "product" ? "font-bold" : "text-gray-900"
                  } dark:text-white hover:underline`}
                >
                  Product
                </Link>
              </li>

      
              <li onClick={() => handleClick("team")}>
                <Link
                  to="#"
                  className={`${
                    currentState === "team" ? "font-bold" : "text-gray-900"
                  } dark:text-white hover:underline`}
                >
                  Team
                </Link>
              </li>


              <li onClick={() => handleClick("features")}>
                <Link
                  to="#"
                  className={`${
                    currentState === "features"
                      ? "font-bold"
                      : "text-gray-900"
                  } dark:text-white hover:underline`}
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
