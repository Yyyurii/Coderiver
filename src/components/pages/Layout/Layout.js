import "./Layout.scss";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Statistics from "../../Statistics";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <Statistics />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
