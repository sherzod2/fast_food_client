import React from "react";
import { Link } from "react-router-dom";
import "./styles/userMain.css";
import useCategories from "../Hooks/useCategories";
import loader from "../Assets/Double Ring-1s-200px.svg";

const UserMainHome = () => {
  const { categories, loading, error } = useCategories();
  return (
    <>
      {categories && (
        <main className="main">
          <section className="category">
            <div className="container">
              <ul className="d-flex justify-content-around flex-wrap">
                {categories?.map((category, index) => (
                  <li key={index} className="category__img">
                    <Link
                      className="category__img-link category__img"
                      to={`/shops/${category?.id}`}
                      style={{ backgroundImage: `url(${category.img})` }}
                    >
                      {category?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          <img src={loader} alt="loader" />
        </div>
      )}
      {error && <h1>Internal server error :(</h1>}
    </>
  );
};

export default UserMainHome;
