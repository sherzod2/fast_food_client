import { useContext } from "react";
import { Context } from "../Context/getFoods";

const useFoods = () => {
  const { foods, setFoods, loading, error } = useContext(Context);

  return { foods, setFoods, loading, error };
};

export default useFoods;
