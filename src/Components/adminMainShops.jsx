import React from "react";
import useShops from "../Hooks/useShops";
import "./styles/adminMainShops.css";
import { gql, useMutation } from "@apollo/client";
import useCategories from "../Hooks/useCategories";

const NEW_SHOP = gql`
  mutation ($name: String!, $img: String!, $category_id: Int!) {
    insertShop(name: $name, img: $img, category_id: $category_id) {
      id
      name
      img
    }
  }
`;

const DELETE_SHOP = gql`
  mutation ($id: ID!) {
    deleteShop(id: $id) {
      id
      name
    }
  }
`;

const AdminMainShops = () => {
  const { shops } = useShops();
  const { categories } = useCategories();
  const [newShop] = useMutation(NEW_SHOP, {
    onError: (err) => console.log(err),
  });
  const [deleteShop] = useMutation(DELETE_SHOP, {
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, img, category_id } = e.target;

    newShop({
      variables: {
        name: name.value,
        img: img.value,
        category_id: category_id.value,
      },
    });
  };

  const handleDelete = (id) => {
    deleteShop({
      variables: {
        id,
      },
    });
    window.location.reload();
  };

  return (
    <main className="main">
      <section className="shops">
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
              {shops?.map((shop, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{shop?.name}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(shop?.id)}
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
                      Shop name
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
                      Shop picture link
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
                      name="category_id"
                    >
                      <option value="">Choose category</option>
                      {categories?.map((category, index) => (
                        <option key={index} value={category?.id}>
                          {category?.name}
                        </option>
                      ))}
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

export default AdminMainShops;
