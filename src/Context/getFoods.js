import { createContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const Context = createContext();
const FOODS = gql`
  query {
    foods {
      id
      name
      img
      price
    }
  }
`;

const Provider = ({ children }) => {
  const { data, loading, error } = useQuery(FOODS);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    setFoods(data?.foods);
  }, [data]);

  return (
    <Context.Provider value={{ foods, setFoods, loading, error }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
