import { Outlet, Navigate } from "react-router-dom";
import useToken from "../Hooks/useToken";

const Private = () => {
  const { token } = useToken();
  if (token) return <Outlet />;
  return <Navigate to="/" />;
};

export default Private;
