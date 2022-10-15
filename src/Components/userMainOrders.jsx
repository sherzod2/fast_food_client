import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import loader from "../Assets/Double Ring-1s-200px.svg";

const FOODS = gql`
  query ($id: ID!) {
    food(id: $id) {
      id
      name
      img
      price
    }
  }
`;

const UserMainOrders = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(FOODS, {
    variables: { id },
  });

  const handleCorzinka = (food) => {
    const baskets = JSON.parse(window.localStorage.getItem("corzinka")) || [];

    const foundFood = baskets?.find((basket) => basket?.id === food?.id);

    if (foundFood) {
      alert("Bu korzinkaga saqlangan :(");
    } else {
      baskets.push(food);
      window.localStorage.setItem("corzinka", JSON.stringify(baskets));
      alert("Korzinkaga muvafaqiyatli saqlandi :)");
    }
  };
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
                {data?.food?.map((f, index) => (
                  <li key={index} className="rounded m-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={f?.img} className="card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h5 className="card-title">{f?.name}</h5>
                        <p className="card-textm my-3">{f?.price}</p>
                        <p
                          onClick={() => handleCorzinka(f)}
                          href="#"
                          className="btn btn-primary"
                        >
                          Add corzinka
                        </p>
                      </div>
                    </div>
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

export default UserMainOrders;
