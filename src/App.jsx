import { Route, Routes } from "react-router-dom";
import "./App.css";
import Public from "./Route/Public";
import Private from "./Route/Private";
import UserHome from "./Pages/userHome";
import UserShops from "./Pages/userShops";
import PageNotFound from "./Pages/pageNotFound";
import Login from "./Pages/login";
import UserCorzinka from "./Pages/userCorzinka";
import UserOrders from "./Pages/userOrders";
import Admin from "./Pages/admin";
import AdminShops from "./Pages/adminShops";
import AdminFoods from "./Pages/adminFoods";
import AdminOrders from "./Pages/adminOrders";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/shops/:id" element={<UserShops />} />
          <Route path="/login" element={<Login />} />
          <Route path="/corzinka" element={<UserCorzinka />} />
          <Route path="/orders/:id" element={<UserOrders />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route path="/" element={<Private />}>
          <Route path="/admin/categories" element={<Admin />} />
          <Route path="/admin/shops" element={<AdminShops />} />
          <Route path="/admin/foods" element={<AdminFoods />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
