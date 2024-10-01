import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Homepage from "./pages/Homepage";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index={true} element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
