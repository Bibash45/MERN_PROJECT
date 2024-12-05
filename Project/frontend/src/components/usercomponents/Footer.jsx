import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to="https://flowbite.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="w-14" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                <span className="text-red-900">Hamro</span>
                <span className="text-amber-400">Bazar</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="/resources/flowbite" className="hover:underline">
                    Product
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/resources/tailwindcss" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/resources/tailwindcss" className="hover:underline">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3 text-2xl text-[#4267B2]">
                  <Link to="/follow/github" className="hover:underline">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="mb-3 text-2xl text-[#7289da]">
                  <Link to="/follow/discord" className="hover:underline">
                    <FaDiscord />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/legal/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              HamroBazar
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="/social/facebook"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-2xl"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/social/discord"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-2xl"
            >
              <FaDiscord />
            </Link>
            <Link
              to="/social/twitter"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-2xl"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/social/github"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              {/* GitHub icon */}
            </Link>
            <Link
              to="/social/dribbble"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              {/* Dribbble icon */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
