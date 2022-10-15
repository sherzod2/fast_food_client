import React from "react";
import AdminMainShops from "../Components/adminMainShops";
import AdminSitebar from "../Components/adminSitebar";

const AdminShops = () => {
  return (
    <div className="d-flex align-items-start">
      <AdminSitebar />
      <AdminMainShops />
    </div>
  );
};

export default AdminShops;
