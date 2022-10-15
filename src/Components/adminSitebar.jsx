import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/adminSitebar.css";

const AdminSitebar = () => {
  return (
    <div className="sitebar">
      <h1 className="sitebar__logo">ADMIN PANEL</h1>
      <ul className="sitebar__list">
        <li className="sitebar__item">
          <NavLink className="sitebar__item-link" to="/admin/categories">
            Categories
          </NavLink>
        </li>
        <li className="sitebar__item">
          <NavLink className="sitebar__item-link" to="/admin/shops">
            Shops
          </NavLink>
        </li>
        <li className="sitebar__item">
          <NavLink className="sitebar__item-link" to="/admin/foods">
            Foods
          </NavLink>
        </li>
        <li className="sitebar__item">
          <NavLink className="sitebar__item-link" to="/admin/orders">
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSitebar;
