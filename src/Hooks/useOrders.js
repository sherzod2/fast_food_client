import { useContext } from "react";
import { Context } from "../Context/getOrders";

const useOrders = () => {
  const { orders, setOrders, loading, error } = useContext(Context);

  return { orders, setOrders, loading, error };
};

export default useOrders;
