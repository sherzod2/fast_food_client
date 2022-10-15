import React from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/userMainShops.css";
import { gql, useQuery } from "@apollo/client";
import loader from "../Assets/Double Ring-1s-200px.svg";

const SHOPS = gql`
  query ($id: ID!) {
    shop(id: $id) {
      id
      name
      img
    }
  }
`;

const UserMainShops = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(SHOPS, {
    variables: { id },
  });
  return (
    <>
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          <img src={loader} alt="loader" />
        </div>
      )}
      {error && <h1>Internal server error :(</h1>}
      {data && (
        <main className="main">
          <section className="category">
            <div className="container">
              <ul className="d-flex justify-content-around flex-wrap">
                {data?.shop?.map((sh, index) => (
                  <li key={index} className="category__img">
                    <Link
                      className="category__img-link category__img"
                      to={`/orders/${sh?.id}`}
                      style={{
                        backgroundImage: `url(${sh?.img})`,
                      }}
                    >
                      {sh?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default UserMainShops;
