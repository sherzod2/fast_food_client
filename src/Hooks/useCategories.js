import { useContext } from "react";
import { Context } from "../Context/getCategories";

const useCategories = () => {
  const { categories, setCategories, loading, error } = useContext(Context);

  return { categories, setCategories, loading, error };
};

export default useCategories;
