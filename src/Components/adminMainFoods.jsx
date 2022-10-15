import { gql, useMutation } from "@apollo/client";
import React from "react";
import useFoods from "../Hooks/useFoods";
import useShops from "../Hooks/useShops";
import "./styles/adminMainFoods.css";

const NEW_FOOD = gql`
  mutation ($name: String!, $img: String!, $price: Int!, $shop_id: Int!) {
    insertFood(name: $name, img: $img, price: $price, shop_id: $shop_id) {
      id
      name
      img
      price
    }
  }
`;

const DELETE_FOOD = gql`
  mutation ($id: ID!) {
    deleteShop(id: $id) {
      id
      name
      img
    }
  }
`;

const AdminMainFoods = () => {
  const { shops } = useShops();
  const { foods } = useFoods();
  const [newFood] = useMutation(NEW_FOOD, {
    onError: (err) => console.log(err),
  });
  const [deleteFood] = useMutation(DELETE_FOOD, {
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, img, price, shop_id } = e.target;
    newFood({
      variables: {
        name: name.value,
        img: img.value,
        price: price.value,
        shop: shop_id.value,
      },
    });
  };

  const handleDelete = (id) => {
    deleteFood({
      variables: {
        id,
      },
    });
    window.location.reload();
  };

  return (
    <main className="main">
      <section className="foods">
        <div className="table-wrapper">
          <table className="table table-header my-5">
            <thead>
              <tr className="table__dark">
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {foods?.map((food, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{food?.name}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(food?.id)}
                      className="delete__item"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="corzinka-modal">
        <div className="container">
          <button
            type="button"
            className="btn btn-primary add__data"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <form onSubmit={(e) => handleSubmit(e)} className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Enter your data
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Food name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3" style={{ position: "relative" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Food price
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3" style={{ position: "relative" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Food picture link
                    </label>
                    <input
                      type="text"
                      name="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue=""
                      name="shop_id"
                    >
                      <option value="">Choose shop</option>
                      {shops?.map((shop, index) => (
                        <option key={index} value={shop?.id}>
                          {shop?.name}
                        </option>
                      ))}
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminMainFoods;
