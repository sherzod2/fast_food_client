import { useNavigate, Outlet, useLocation } from "react-router-dom";
import useToken from "../Hooks/useToken";
import Admin from "../Pages/admin";

const Public = () => {
  const { token } = useToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (token && pathname === "/login") {
    navigate("/admin/categories");
    return <Admin />;
  }
  return <Outlet />;
};

export default Public;
