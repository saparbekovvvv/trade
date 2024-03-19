import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Balance from "../components/balance/Balance";

const PUBLIC = [
  { path: "/", element: <Balance />, key: 1 },
  { path: "/admin", element: <Admin />, key: 2 },
];
const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
