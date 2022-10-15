import React from "react";
import AdminMainCategories from "../Components/adminMainCategories";
import AdminSitebar from "../Components/adminSitebar";

const Admin = () => {
  return (
    <div className="d-flex justify-content-between align-items-start">
      <AdminSitebar />
      <AdminMainCategories />
    </div>
  );
};

export default Admin;
