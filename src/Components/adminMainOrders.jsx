import React from "react";
import "./styles/adminMainFoods.css";
import useOrders from "../Hooks/useOrders";

const AdminMainOrders = () => {
  const { orders } = useOrders();
  return (
    <div className="table-wrapper">
      <table className="table table-header my-5">
        <thead>
          <tr className="table__dark">
            <th scope="col">№</th>
            <th scope="col">Name</th>
            <th scope="col">Phone number</th>
            <th scope="col">Address</th>
            <th scope="col">Products</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((category, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{category?.name}</td>
              <td>{category?.number}</td>
              <td>{category?.address}</td>
              <td>{category?.products}</td>
              <td>{category?.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMainOrders;
