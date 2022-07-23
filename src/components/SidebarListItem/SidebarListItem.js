import "./SidebarListItem.scss";

const SidebarListItem = ({ details }) => {
  return (
    <li
      className={
        details.class
          ? "sidebar-list-item item active"
          : "sidebar-list-item item"
      }
    >
      <a href="/" className="item__link">
        <img className="item__img" src={details.img} alt="icon" />
        <span className="item__title">{details.title}</span>
      </a>
    </li>
  );
};

export default SidebarListItem;
