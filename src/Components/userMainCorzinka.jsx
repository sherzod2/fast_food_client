import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const NEW_ORDER = gql`
  mutation (
    $name: String!
    $number: String!
    $address: String!
    $products: String!
  ) {
    newOrder(
      name: $name
      number: $number
      address: $address
      products: $products
    ) {
      id
      name
      number
      address
      products
      time
    }
  }
`;

const UserMainCorzinka = () => {
  const [orders, setOrders] = useState([]);
  const [baskets, setBaskets] = useState(
    JSON.parse(window.localStorage.getItem("corzinka")) || []
  );
  const [newOrder] = useMutation(NEW_ORDER, {
    onError: (err) => console.log(err),
  });

  const handleDeleteCorzinka = (id) => {
    const filteredBaskets = baskets?.filter((basket) => basket?.id !== id);
    setBaskets(filteredBaskets);
    window.localStorage.setItem("corzinka", JSON.stringify(filteredBaskets));
  };

  const handleChageInput = (inputValue, basket) => {
    const filteredOrders = orders?.filter((order) => order?.id !== basket?.id);
    if (inputValue > 0) {
      basket.count = inputValue;
      setOrders([...filteredOrders, basket]);
    } else {
      setOrders([...filteredOrders]);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, phone, address } = evt.target;
    let products = "";
    for (let i = 0; i < orders.length; i++) {
      if (i !== 0) {
        products += `, ${orders[i]?.count} ta ${orders[i]?.name}`;
      } else {
        products += `${orders[i]?.count} ta ${orders[i]?.name}`;
      }
    }
    const variables = {
      name: name.value,
      number: "+9989" + phone.value,
      address: address.value,
      products,
    };
    console.log(variables);
    newOrder({
      variables,
    });
    window.localStorage.removeItem("corzinka");
    window.location.href = "/";
  };

  return (
    <>
      {!baskets[0] && (
        <div className="text-center">
          <i
            className="bi bi-cart4"
            style={{ fontSize: "300px", cursor: "pointer" }}
          ></i>
        </div>
      )}
      {baskets && (
        <main className="main">
          <section className="category position-relative">
            <div className="container">
              <ul className="d-flex justify-content-around flex-wrap">
                {baskets?.map((basket, index) => (
                  <li key={index} className="rounded m-3">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={basket?.img}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{basket?.name}</h5>
                        <p className="card-textm my-3">{basket?.price}</p>
                        <div className="input-group mb-3">
                          <input
                            onChange={(e) =>
                              handleChageInput(e.target.value, basket)
                            }
                            type="number"
                            className="form-control"
                            placeholder="Enter count"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <p
                          onClick={() => handleDeleteCorzinka(basket?.id)}
                          href="#"
                          className="btn btn-danger mb-3"
                        >
                          Delete
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {baskets[0] && orders.length && (
            <section className="corzinka-modal">
              <div className="container">
                <button
                  style={{ position: "fixed", bottom: "40px", right: "30px" }}
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Buy
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="modal-content"
                    >
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
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Your full name
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
                          <span
                            style={{
                              position: "absolute",
                              bottom: "6px",
                              left: "3px",
                              fontSize: "17.2px",
                            }}
                          >
                            +998
                          </span>
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Your phone number
                          </label>
                          <input
                            style={{ paddingLeft: "42px" }}
                            type="number"
                            name="phone"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Your address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="address"
                            required
                          />
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
                          BUY
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      )}
    </>
  );
};

export default UserMainCorzinka;
