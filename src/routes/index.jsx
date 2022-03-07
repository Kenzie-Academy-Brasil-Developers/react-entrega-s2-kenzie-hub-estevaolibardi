import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import { useState, useEffect } from "react";

const RoutesP = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    if (token) {
      return setAuth(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login auth={auth} setAuth={setAuth} />} />
      <Route
        path="/home"
        element={<Dashboard auth={auth} setAuth={setAuth} />}
      />
      <Route path="/sign-in" element={<SignUp auth={auth} />} />
    </Routes>
  );
};

export default RoutesP;
