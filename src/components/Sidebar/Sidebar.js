import "./Sidebar.scss";
import logo from "../../assets/images/logo.svg";
import SidebarList from "../SidebarList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo logo">
        <img className="logo__img" src={logo} alt="logo" />
        <span className="logo__title">Dashboard</span>
      </div>
      
      <SidebarList />
    </div>
  );
};

export default Sidebar;
