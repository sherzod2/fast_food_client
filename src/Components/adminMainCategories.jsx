import React from "react";
import "./styles/adminMainCategories.css";
import useCategories from "../Hooks/useCategories";

const AdminMainCategories = () => {
  const { categories } = useCategories();
  return (
    <div className="table-wrapper">
      <table className="table table-header my-5">
        <thead>
          <tr className="table__dark">
            <th scope="col">№</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{category?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMainCategories;
