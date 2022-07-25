import "./SidebarListItem.scss";
import { NavLink } from "react-router-dom";

const SidebarListItem = ({ details }) => {
  let activeStyle = {
    color: "#dde2ff",
    background: "rgba(159, 162, 180, 0.08)",
    borderLeft: "3px solid #dde2ff",
    opacity: 1
  };

  return (
    <li
      className={
        details.class
          ? "sidebar-list-item item active"
          : "sidebar-list-item item"
      }
    >
      <NavLink
        to={details.link}
        className="item__link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img className="item__img" src={details.img} alt="icon" />
        <span className="item__title">{details.title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarListItem;
