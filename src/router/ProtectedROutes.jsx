import { Navigate, Outlet } from "react-router-dom";

const ProtectedROutes = () => {
  // const token = localStorage.getItem("accesstoken");
  const token = "ABC";
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedROutes;
