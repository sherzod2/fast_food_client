import { createContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const Context = createContext();
const CATEGORIES = gql`
  query {
    categories {
      id
      name
      img
    }
  }
`;

const Provider = ({ children }) => {
  const { data, loading, error } = useQuery(CATEGORIES);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(data?.categories);
  }, [data]);

  return (
    <Context.Provider value={{ categories, setCategories, loading, error }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
