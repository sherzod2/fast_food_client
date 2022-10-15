import { createContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const Context = createContext();
const ORDERS = gql`
  query {
    orders {
      id
      name
      number
      address
      products
      time
    }
  }
`;

const Provider = ({ children }) => {
  const { data, loading, error } = useQuery(ORDERS);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(data?.orders);
  }, [data]);

  return (
    <Context.Provider value={{ orders, setOrders, loading, error }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
