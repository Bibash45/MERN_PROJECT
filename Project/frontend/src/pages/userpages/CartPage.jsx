import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const [cartData, setCardData] = useState([]);
  const [shipping, setshipping] = useState(10);
  const [tax, setTax] = useState(0.3);

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

  // Increase quantity and update price
  const handleIncrease = (id) => {
    const newData = cartData.map((item) => {
      return item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            price: (item.quantity + 1) * item.unitPrice, // Use unitPrice
          }
        : item;
    });
    setCardData(newData);
    localStorage.setItem("cartItems", JSON.stringify(newData));
  };

  // Decrease quantity and update price
  const handleDecrease = (id) => {
    const newData = cartData.map((item) => {
      const updatedPrice = (item.quantity - 1) * item.unitPrice; // Use unitPrice
      if (item.id === id && item.quantity > 1) {
        const updatedItem = {
          ...item,
          quantity: item.quantity - 1,
          price: updatedPrice,
        };
        return updatedItem;
      }
      return item;
    });

    setCardData(newData);
    localStorage.setItem("cartItems", JSON.stringify(newData));
  };

  //remove cart
  const removeCart = (id) => {
    const newData = cartData.filter((item) => item.id !== id);
    setCardData(newData);
    localStorage.setItem("cartItems", JSON.stringify(newData));
  };

  // clear cart
  const clearCart = () => {
    setCardData([]);
    localStorage.removeItem("cartItems");
  };

  // shipping handle
  const handleShipping = (shipping) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("jwt"));
    if (isAuthenticated) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=shippng");
    }
  };

  return (
    <>
      {cartData.length === 0 ? (
        <h1 className="text-center text-4xl my-10 text-gray-500">
          No items in the cart
        </h1>
      ) : (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Shopping Cart
            </h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <Link to="#" className="shrink-0 md:order-1">
                            <img
                              className="h-20 w-20 dark:hidden"
                              src={`http://localhost:8000/${item.image}`}
                              alt={item.name || "Product"}
                            />
                            <img
                              className="hidden h-20 w-20 dark:block"
                              src={`http://localhost:8000/${item.image}`}
                              alt={item.name || "Product"}
                            />
                          </Link>

                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleDecrease(item.id)}
                                type="button"
                                id="decrement-button-2"
                                data-input-counter-decrement="counter-input-2"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-4 w-4 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <p className="text-lg px-4">{item.quantity}</p>
                              <button
                                onClick={() => handleIncrease(item.id)}
                                type="button"
                                id="increment-button-2"
                                data-input-counter-increment="counter-input-2"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 "
                              >
                                <svg
                                  className="h-4 w-4 f900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                ${item.price}
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <Link
                              to="#"
                              className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                            >
                              {item.name}
                            </Link>

                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                Add to Favorites
                              </button>

                              <button
                                onClick={() => removeCart(item.id)}
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              0
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Units
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                          {cartData.reduce(
                            (acc, item) => acc + Number(item.quantity),
                            0
                          )}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Total
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $
                          {cartData.reduce(
                            (acc, item) => acc + Number(item.price),
                            0
                          )}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Shipping
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          ${shipping}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $
                          {tax *
                            cartData.reduce(
                              (acc, item) => acc + Number(item.price),
                              0
                            )}
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total amount
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        $
                        {tax *
                    cartData.reduce((acc, item) => acc + Number(item.price), 0) +
                          cartData.reduce(
                            (acc, item) => acc + Number(item.price),
                            0
                          ) +
                          shipping }
                      </dd>
                    </dl>
                  </div>

                  <button
                    onClick={handleShipping}
                    to="#"
                    className="flex w-full items-center justify-center rounded-lg bg-red-400 hover:bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <Link
                      to="/product"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Do you have a voucher or gift card?{" "}
                      </label>
                      <input
                        defaultValue="1"
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartPage;
