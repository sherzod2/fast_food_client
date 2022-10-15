import { useContext } from "react";
import { Context } from "../Context/authContext";

const useToken = () => {
  const { token, setToken } = useContext(Context);

  return { token, setToken };
};

export default useToken;
