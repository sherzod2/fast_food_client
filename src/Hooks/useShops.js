import { useContext } from "react";
import { Context } from "../Context/getShops";

const useShops = () => {
  const { shops, setShops, loading, error } = useContext(Context);

  return { shops, setShops, loading, error };
};

export default useShops;
