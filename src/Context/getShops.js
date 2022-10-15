import { createContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const Context = createContext();
const SHOPS = gql`
  query {
    shops {
      id
      name
      img
    }
  }
`;

const Provider = ({ children }) => {
  const { data, loading, error } = useQuery(SHOPS);
  const [shops, setShops] = useState([]);
  useEffect(() => {
    setShops(data?.shops);
  }, [data]);

  return (
    <Context.Provider value={{ shops, setShops, loading, error }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
