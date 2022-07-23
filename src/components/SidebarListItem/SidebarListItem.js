import './SidebarListItem.scss';

const SidebarListItem = ({details}) => {
  return (
    <li className={details.class ? "sidebar-list-item item active" : "sidebar-list-item item"}>
      <img className="item__img" src={details.img} alt="icon" />
      <span className="item__title">{details.title}</span>
    </li>
  );
};

export default SidebarListItem;