import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="w-14"
              alt="Flowbite Logo"
            />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-800">
              E<span className="text-black">-</span>Nepse
            </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/resources/flowbite" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link to="/resources/tailwindcss" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/follow/github" className="hover:underline">Github</Link>
                </li>
                <li>
                  <Link to="/follow/discord" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/legal/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="/social/facebook" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              {/* Facebook icon */}
            </Link>
            <Link to="/social/discord" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              {/* Discord icon */}
            </Link>
            <Link to="/social/twitter" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              {/* Twitter icon */}
            </Link>
            <Link to="/social/github" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              {/* GitHub icon */}
            </Link>
            <Link to="/social/dribbble" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              {/* Dribbble icon */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
