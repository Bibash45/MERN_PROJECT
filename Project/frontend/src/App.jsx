import Myroute from "./Myroute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const App = () => {

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <Myroute />
    </>
  );
};
export default App;
